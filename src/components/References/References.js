import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import data from '../../data/References.json';
import { Linkedin } from 'react-feather';

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

export default function References() {
	const classes = useStyles();
	return (
		<>
			{data &&
				data.map((elm, key) => (
					<React.Fragment key={key}>
						<Typography variant="h6">{elm.name}</Typography>
						<Typography color="textSecondary">
							{elm.position} at {elm.businessName}
						</Typography>
						<IconButton
							href={elm.linkedIn}
							color="primary"
							variant="outlined"
						>
							<Linkedin size="18" />
						</IconButton>
						{key < data.length - 1 ? (
							<Divider className={classes.divider} />
						) : null}
					</React.Fragment>
				))}
		</>
	);
}
