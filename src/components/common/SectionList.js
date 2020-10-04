import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from './Section';
import Experience from '../Experience/Experience';
import Education from '../Education/Education.js';
import Skills from '../Skills/Skills.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Courses from '../Courses/Courses.js';
import {
	AssignmentIndOutlined,
	AssignmentTurnedInOutlined,
	SchoolOutlined,
	StarsOutlined,
} from '@material-ui/icons';

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
	section: {
		marginBottom: '1rem',
	},
}));

const data = [
	{
		component: <Experience />,
		data: {
			title: 'Experience',
			subhead: null,
			icon: <StarsOutlined />,
		},
	},
	{
		component: <Education />,
		data: {
			title: 'Education',
			subhead: null,
			icon: <SchoolOutlined />,
		},
	},
	{
		component: <Skills />,
		data: {
			title: 'Skills & Seniority',
			subhead: null,
			icon: <AssignmentTurnedInOutlined />,
		},
	},
	{
		component: <Courses />,
		data: {
			title: 'Courses & Certifications',
			subhead: null,
			icon: <AssignmentIndOutlined />,
		},
	},
];

export default function SectionData() {
	const classes = useStyles();
	return data.map((elm, key) => (
		<Section
			key={key}
			className={classes.section}
			component={elm.component}
			data={elm.data}
		/>
	));
}
