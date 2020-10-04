import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import data from '../../data/Courses.json';
import {
	LanguageOutlined,
	AssignmentTurnedInOutlined,
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
	divider: {
		marginTop: '0.5rem',
		marginBottom: '0.5rem',
	},
}));

function openUrl(url) {
	if (!url) return;
	window.open(url);
}

function openCertificate(url) {
	if (!url) return;
	window.open(url);
}

export default function Courses() {
	const classes = useStyles();
	return (
		data &&
		data.map((elm, key) => (
			<React.Fragment key={key}>
				<Typography variant="h6" key={key}>
					{elm.label} - <span>{elm.place}</span>
					<Tooltip title="Open website">
						<IconButton
							aria-label="web"
							onClick={() => openUrl(elm.website)}
						>
							<LanguageOutlined />
						</IconButton>
					</Tooltip>
					{elm.url ? (
						<Tooltip title="Open certificate">
							<IconButton
								aria-label="web"
								onClick={() => openUrl(elm.url)}
							>
								<AssignmentTurnedInOutlined />
							</IconButton>
						</Tooltip>
					) : null}
				</Typography>
				<Typography color="textSecondary">{elm.description}</Typography>
				{key < data.length - 1 ? (
					<Divider className={classes.divider} />
				) : null}
			</React.Fragment>
		))
	);
}
