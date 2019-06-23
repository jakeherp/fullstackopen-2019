import React from "react"

const Total = ({ parts }) => {
	return (
		<p>
			<strong>
				{`Total of ${parts.reduce(
					(prev, next) => prev + next.exercises,
					0,
				)} exercises`}
			</strong>
		</p>
	)
}

export default Total
