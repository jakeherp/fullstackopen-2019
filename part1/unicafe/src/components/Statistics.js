import React, { Fragment } from "react"

const Statistic = ({ name, count }) => (
	<tr>
		<td>
			<strong>{name}</strong>
		</td>
		<td>{count}</td>
	</tr>
)

const Statistics = ({ stats: { good, neutral, bad } }) => {
	const total = good + bad + neutral

	return (
		<table>
			<tbody>
				{total >= 1 ? (
					<Fragment>
						<Statistic name="good" count={good} />
						<Statistic name="neutral" count={neutral} />
						<Statistic name="bad" count={bad} />
						<Statistic name="all" count={total} />
						<Statistic name="average" count={total / 3} />
						<Statistic
							name="positive"
							count={`${(good / total) * 100} %`}
						/>
					</Fragment>
				) : (
					<tr>
						<td>No feedback given</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default Statistics
