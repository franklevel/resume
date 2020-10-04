import React from 'react';
import Chip from '@material-ui/core/Chip';

const TagList = ({ tags }) => {
	if (!tags) return;
	return (
		<React.Fragment>
			{tags.map((elm, key) => (
				<Chip label={elm} />
			))}
		</React.Fragment>
	);
};

export default TagList;
