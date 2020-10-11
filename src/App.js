import React, { useRef } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Menu from './components/Menu/Menu';
import Sidebar from './components/Sidebar/Sidebar';
import SectionList from './components/common/SectionList';
import Button from '@material-ui/core/Button';
import { Helmet } from 'react-helmet';

export default function App() {
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Frank Ruiz - Software Developer</title>
				<meta
					name="description"
					content="I'm a seasoned software developer which loves to code."
				/>
			</Helmet>
			<Menu />
			<Container style={{ padding: '1rem' }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={3}>
						<Sidebar />
					</Grid>
					<Grid item xs={12} md={9}>
						<SectionList />
						<Typography align="center" color="textSecondary">
							Developed with React and Material UI. You don`t need to
							print it!. Let's be eco-friendly!
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
