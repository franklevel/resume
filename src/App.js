import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Menu from './components/Menu/Menu';
import Sidebar from './components/Sidebar/Sidebar';
import SectionList from './components/common/SectionList';

export default function App() {
	return (
		<React.Fragment>
			<Menu />
			<Container style={{ padding: '1rem' }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={3}>
						<Sidebar />
					</Grid>
					<Grid item xs={12} md={8}>
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
