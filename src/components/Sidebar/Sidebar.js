import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import picture from '../../assets/images/0.jpeg';
import { Chip, Icon, IconButton } from '@material-ui/core';
import { Linkedin } from 'react-feather';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: 'white',
		position: '-webkit-sticky',
		position: 'sticky',
		top: 80,
		bottom: 20,
		paddingTop: '40px',
		paddingBottom: '40px',
		zIndex: 5,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	media: {
		height: 100,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(	0deg)',
	},
}));

export default function Menu() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={picture}
				title="Franklin Ruiz"
			/>
			<CardContent>
				<Typography variant="h6">
					About me{' '}
					<Button
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
						color="primary"
					>
						{expanded ? 'Read less' : 'Read more'}
					</Button>
				</Typography>
				<Typography paragraph>
					I'm a seasoned software developer which loves to code and all
					related to new technologies. I started in 2006 while attending to
					college.
				</Typography>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<Typography paragraph>
						Since 2007 I've been creating web applications using PHP as
						main programming language.
					</Typography>
					<Typography paragraph>
						Nowdays, I've been working for few tech consulting companies,
						developing with the most demanding and latest technologies.
					</Typography>
				</Collapse>

				<Typography variant="h6">Contact</Typography>
				<Typography>
					Find me in
					<IconButton
						color="inherit"
						href="https://www.linkedin.com/in/frank-ruiz-ar/"
						rel="noopener noreferrer"
						target="_blank"
						size="medium"
					>
						<Linkedin size="18" />
					</IconButton>
				</Typography>
				<Typography variant="h6">Languages</Typography>
				<Chip label="Spanish" />
				<Chip label="English" />
			</CardContent>
		</Card>
	);
}
