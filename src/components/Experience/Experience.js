import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import data from '../../data/Experience.json';
//import TagList from '../common/TagList';

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
	tags: {
		marginTop: '2rem',
	},
	divider: {
		marginTop: '1rem',
		marginBottom: '1rem',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	buttons: {
		marginBottom: '1rem',
	},
}));

export default function Experience() {
	const classes = useStyles();
	const [mode, setMode] = useState('On site');
	//console.log(mode);
	return (
		<React.Fragment>
			<ButtonGroup
				size="small"
				color="primary"
				aria-label="outlined primary button group"
				className={classes.buttons}
			>
				<Button onClick={() => setMode('On site')} className="active">
					On site
				</Button>
				<Button onClick={() => setMode('Freelance')}>Freelance</Button>
			</ButtonGroup>
			{data &&
				data
					.filter((elm) => elm.modality === mode)
					.map((elm, key) => (
						<React.Fragment key={key}>
							<Typography variant="h6" key={key}>
								{elm.businessName} - <span>{elm.location}</span> -{' '}
								{elm.country}
							</Typography>
							<Typography>
								{elm.position} - {elm.from} to {elm.to}
							</Typography>
							<Typography paragraph color="textSecondary">
								{elm.description}
							</Typography>
							{key < data.length - 1 ? (
								<Divider className={classes.divider} />
							) : null}
						</React.Fragment>
					))}
		</React.Fragment>
	);
}
