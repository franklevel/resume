import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '0.5rem',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	header: {
		marginTop: '0.5rem',
		marginBottom: '0.5rem',
	},
}));

const Section = ({ component, data }) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<a href="#" id={data.alias.toLowerCase()} />
			<Card style={{ marginBottom: '1rem' }}>
				<CardHeader
					avatar={data.icon}
					title={<h2 className={classes.header}>{data.title}</h2>}
					subheader={data.subhead}
					className={classes.root}
				/>
				<CardContent>{component}</CardContent>
			</Card>
		</React.Fragment>
	);
};

export default Section;
