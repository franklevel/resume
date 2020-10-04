import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import data from '../../data/Skills.json';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '0px 16px',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	chip: {
		marginBottom: '0.5rem',
	},
	skill: {
		padding: '1rem',
		height: '15rem',
	},
	divider: {
		marginTop: '0.5rem',
		marginBotton: '0.5rem',
	},
}));

const Seniority = ({ percent }) => {
	if (percent > 0 && percent <= 50) {
		return 'jr';
	} else if (percent > 50 && percent <= 75) {
		return 'ssr';
	} else {
		return 'sr';
	}
};

const SkillItem = ({ title, skills }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.skill} elevation={3}>
			<Typography>
				<b>{title}</b>
			</Typography>
			<Divider className={classes.divider} />
			<div style={{ marginTop: '1rem' }}>
				{skills.map((skill, key) => (
					<div className={classes.chip} key={key}>
						<Chip
							avatar={
								<Avatar>
									<Seniority percent={skill.percent} />
								</Avatar>
							}
							label={skill.name}
							align="right"
							variant="outlined"
						/>
					</div>
				))}
			</div>
		</Paper>
	);
};

const SkillList = ({ data }) => {
	if (!data) return;
	return data.map((item, key) => (
		<React.Fragment key={key}>
			<Grid item xs={12} md={4}>
				<SkillItem key={key} title={item.label} skills={item.skills} />
			</Grid>
		</React.Fragment>
	));
};

export default function Skills() {
	return (
		<Grid container spacing={2}>
			<SkillList data={data} />
		</Grid>
	);
}
