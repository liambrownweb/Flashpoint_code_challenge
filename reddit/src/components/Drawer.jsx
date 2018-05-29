import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PagerButtons from './PagerButtons.jsx';
import topics from './static_data.js';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
		flexShrink: 1,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		flexShrink: 1,
		display: 'flex',
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0, // So the Typography noWrap works
	},
	toolbar: theme.mixins.toolbar,
});

class AppDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"topic_list_start": 0,
			"topic_list_length": 10,
			"limit_topic_list": true
		};
		this.advanceList = this.advanceList.bind(this);
		this.backupList = this.backupList.bind(this);
		this.setListLimit = this.setListLimit.bind(this);
	}

	advanceList() {
		let new_list_start = this.state.topic_list_start + this.state.topic_list_length;
		this.setState({'topic_list_start': new_list_start});
	}
	backupList() {
		let new_list_start = this.state.topic_list_start - this.state.topic_list_length;
		this.setState({'topic_list_start': new_list_start});
	}
	setListLimit() {}
	
	render() {
		let {classes} = this.props,
			topic_list_start = this.state.topic_list_start,
			topic_list_end = topic_list_start + this.state.topic_list_length,
			topic_list = topics.slice(topic_list_start, topic_list_end)
				.map((t) => (<ListItem><ListItemText primary={t} /></ListItem>));
		return (
			<div className={classes.root}>
				<Drawer
					variant="permanent"
					anchor="left"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<List>{topic_list}</List>
					<PagerButtons 
						nextCallback={this.advanceList}
						previousCallback={this.backupList}
						showAllCallback={this.setListLimit}
					/>
				</Drawer>
			</div>
		);
	}
}

AppDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawer);
