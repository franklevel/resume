import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@material-ui/core';

const ProjectList = ({ projects }) => {
	const classes = useStyles();
	if (!projects) return;
	return (
		<div>
			{projects.map((elm, key) => (
				<React.Fragment>
					<Accordion key={key}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>{elm.name}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography color="textSecondary">
								{elm.summary}
							</Typography>
							<TagList tags={elm.tags} />
						</AccordionDetails>
					</Accordion>
				</React.Fragment>
			))}
		</div>
	);
};

export default ProjectList;
