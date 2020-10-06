import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from './Section';
import Experience from '../Experience/Experience';
import Education from '../Education/Education.js';
import Skills from '../Skills/Skills.js';
import Courses from '../Courses/Courses.js';
import References from '../References/References';
import {
	AccountTreeOutlined,
	AssignmentIndOutlined,
	AssignmentTurnedInOutlined,
	SchoolOutlined,
	StarsOutlined,
	SupervisorAccountOutlined,
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
			alias: 'experience',
			icon: <StarsOutlined />,
		},
	},
	{
		component: <Education />,
		data: {
			title: 'Education',
			alias: 'education',
			icon: <SchoolOutlined />,
		},
	},
	{
		component: <Skills />,
		data: {
			title: 'Skills & Seniority',
			alias: 'skills',
			icon: <AssignmentTurnedInOutlined />,
		},
	},
	{
		component: <Courses />,
		data: {
			title: 'Courses & Certifications',
			alias: 'courses',
			icon: <AssignmentIndOutlined />,
		},
	},
	/* {
		component: <References />,
		data: {
			title: 'References',
			alias: 'references',
			icon: <SupervisorAccountOutlined />,
		},
	},
	{
		component: <Courses />,
		data: {
			title: 'Repositories',
			alias: 'repositories',
			icon: <AccountTreeOutlined />,
		},
	}, */
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
