1. As far as the programmer is concerned, Javascript passes some parameters by value (namely primitives) and others by reference (objects). In fact all parameters passed into subroutines are equivalent to pointers in C; how the program interacts with them determines whether they _appear_ passed as values or references.

2. The code sample logs the following:
	
	Index: 4, element: undefined 
	Index: 4, element: undefined 
	Index: 4, element: undefined 
	Index: 4, element: undefined 
	
Likely the programmer expected something more like this:
	
	Index: 0, element: 10
	Index: 1, element: 12 
	Index: 2, element: 15
	Index: 3, element: 21
	
The reason that doesn't happen as the code is written is because the variable `i` is a single entity as far as the program is concerned, and it is not scoped to the anonymous callback for the setTimeout call within the for loop. There are several ways to fix this using appropriate scoping; `i` has to be treated as a transitory control variable and not a reliable index for asynchronous operations.

3. Comparisons of objects should be handled with some care. A JS object has a lot of overhead that many comparison operations can disregard. The most generic way I know to accomplish this is to use the builtin method `Object.hasOwnProperty()`. I've seen suggestions involving serialization and other simplified approaches, but I find those brittle. If a deep comparison is necessary (and developers should always ask that question seriously when considering deep comparisons) then I consider it best to compare the actual data rather than serialized representations.

4. Recursive fibonacci function:
	function fib(n) {
	let result;
	  if (n > 0 && fib.cache.length > n) {
		return fib.cache[n - 1];
	  } else if (n < 2) {
		result = 1;
	  } else {
		result = fib(n - 1) + fib(n - 2);
	  }
	  fib.cache[n - 1] = result;
	  return result;
	}
	fib.cache = [];
