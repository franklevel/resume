import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { IconButton } from '@material-ui/core';
import IconMenu from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
}));

const options = [
	{ label: 'Experience', value: '1', order: 0 },
	{ label: 'Education', value: '2', order: 1 },
	{ label: 'Skills', value: '3', order: 2 },
	{ label: 'Courses', value: '4', order: 3 },
	{ label: 'References', value: '5', order: 4 },
	/*{ label: 'Repositories', value: '6', order: 5 }, */
];

const scrollTo = (elm) => {
	const obj = document.getElementById(elm);
	if (!obj.offsetTop) return;
	window.scroll({ left: 0, top: obj.offsetTop - 80, behavior: 'smooth' });
};

const MenuOptions = ({ options }) => {
	return options.map((option, key) => (
		<Button
			key={key}
			color="inherit"
			value={option.value}
			onClick={() => scrollTo(option.label.toLowerCase())}
		>
			{option.label}
		</Button>
	));
};

export default function Menu() {
	const classes = useStyles();

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const [option, setOption] = React.useState();

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{options.map((item, index) => (
					<ListItem
						button
						key={index}
						onClick={() => scrollTo(item.label.toLowerCase())}
					>
						<ListItemText primary={item.label} />
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	return (
		<React.Fragment>
			<Drawer
				anchor={'left'}
				open={state['left']}
				onClose={toggleDrawer('left', false)}
			>
				{list('left')}
			</Drawer>
			<AppBar position="sticky">
				<Container>
					<Toolbar>
						<Hidden lgUp>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={toggleDrawer('left', true)}
							>
								<IconMenu />
							</IconButton>
						</Hidden>
						<Typography variant="h6" className={classes.title}>
							Franklin Ruiz
							<Hidden smDown> - Software Developer</Hidden>
						</Typography>
						<Hidden smDown>
							<MenuOptions options={options} />
						</Hidden>
					</Toolbar>
				</Container>
			</AppBar>
		</React.Fragment>
	);
}
