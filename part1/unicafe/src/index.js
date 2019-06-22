import React, { Fragment, useState } from "react"
import ReactDOM from "react-dom"

import Statistics from "./components/Statistics"
import Button from "./components/Button"

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const addGood = () => setGood(good + 1)
	const addNeutral = () => setNeutral(neutral + 1)
	const addBad = () => setBad(bad + 1)

	return (
		<Fragment>
			<h1>Give feedback</h1>
			<Button onClick={() => addGood()}>good</Button>
			<Button onClick={() => addNeutral()}>neutral</Button>
			<Button onClick={() => addBad()}>bad</Button>

			<h2>Statistics</h2>
			<Statistics stats={{ good, neutral, bad }} />
		</Fragment>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
