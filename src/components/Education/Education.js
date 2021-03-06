import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import data from '../../data/Education.json';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	divider: {
		marginTop: '1rem',
		marginBottom: '1rem',
	},
}));

export default function Education() {
	const classes = useStyles();
	return (
		<>
			{data &&
				data.map((elm, key) => (
					<React.Fragment key={key}>
						<Typography variant="h6">{elm.title}</Typography>
						<Typography>{elm.university}</Typography>
						<Typography>{elm.place}</Typography>
						<Typography color="textSecondary">
							From {elm.from} to {elm.to}
						</Typography>

						{key < data.length - 1 ? (
							<Divider className={classes.divider} />
						) : null}
					</React.Fragment>
				))}
		</>
	);
}
