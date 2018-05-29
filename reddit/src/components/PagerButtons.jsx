import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import AllInclusive from '@material-ui/icons/AllInclusive';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import Save from '@material-ui/icons/Save';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		  marginRight: 0,
	},
	rightIcon: {
		  marginLeft: 0,
	},
	iconSmall: {
		  fontSize: 20,
	},
});

class PagerButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"show_all": false
		};
		this.handleNextClicked = this.handleNextClicked.bind(this);
		this.handlePreviousClicked = this.handlePreviousClicked.bind(this);
		this.toggleShowAll = this.toggleShowAll.bind(this);
	}

	handleNextClicked(event) {
		if (this.props.hasOwnProperty("nextCallback")) {
			this.props.nextCallback(event);
		}
	}

	handlePreviousClicked(event) {
		if (this.props.hasOwnProperty("previousCallback")) {
			this.props.previousCallback(event);
		}
	}

	toggleShowAll(event) {
		if (this.props.hasOwnProperty("showAllCallback")) {
			this.props.showAllCallback(event);
		}
	}

	render () {
		const { classes } = this.props;
		return (
			<div>
				<IconButton className={classes.button} onClick={this.handlePreviousClicked} variant="flat" color="primary">
					<NavigateBefore className={classes.centerIcon} />
				</IconButton>
				<IconButton className={classes.button} onClick={this.toggleShowAll} variant="flat" color="default">
					<AllInclusive className={classes.centerIcon} />
				</IconButton>
				<IconButton className={classes.button} onClick={this.handleNextClicked} variant="flat" color="primary">
					<NavigateNext className={classes.centerIcon} />
				</IconButton>
			</div>
		);
	}
}

PagerButtons.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PagerButtons);
