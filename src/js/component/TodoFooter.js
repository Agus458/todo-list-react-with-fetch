import React from "react";
import PropTypes from "prop-types";

export default function TodoFooter(props) {
	return (
		<div className="card-body">
			<p>
				{props.cantTasks === 0
					? "You are up to date"
					: props.cantTasks === 1
					? `${props.cantTasks} task remaining`
					: `${props.cantTasks} tasks remaining`}
			</p>
		</div>
	);
}

TodoFooter.propTypes = {
	cantTasks: PropTypes.number
};
