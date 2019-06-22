import React from "react"

import Part from "./Part"

const Content = ({ parts }) => (
	<React.Fragment>
		{parts.map((part, i) => (
			<Part part={part.name} exercises={part.exercises} key={i} />
		))}
	</React.Fragment>
)

export default Content
