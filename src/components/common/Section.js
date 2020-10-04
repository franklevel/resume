import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Section = ({ component, data }) => {
	return (
		<Card style={{ marginBottom: '1rem' }}>
			<CardHeader
				avatar={data.icon}
				title={<h2>{data.title}</h2>}
				subheader={data.subhead}
			/>
			<CardContent>{component}</CardContent>
		</Card>
	);
};

export default Section;
