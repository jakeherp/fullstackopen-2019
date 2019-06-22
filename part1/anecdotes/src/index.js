import React, { Fragment, useState } from "react"
import ReactDOM from "react-dom"

const App = ({ anecdotes }) => {
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

	const selectAnecdote = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length))
	}

	const voteAnecdote = () => {
		const votesList = [...votes]
		votesList[selected]++
		setVotes(votesList)
	}

	const mostVoted = () => votes.indexOf(Math.max(...votes))

	return (
		<Fragment>
			<div>
				<h1>Anecdote of the day</h1>
				<p>{anecdotes[selected]}</p>
				<p>
					has {votes[selected]} vote
					{votes[selected] !== 1 && `s`}
				</p>
			</div>
			<button onClick={() => voteAnecdote()}>Vote</button>
			<button onClick={() => selectAnecdote()}>Next anecdote</button>
			<div>
				<h2>Anecdote with the most votes</h2>
				<p>{anecdotes[mostVoted()]}</p>
				<p>
					has {votes[mostVoted()]} vote
					{votes[mostVoted()] !== 1 && `s`}
				</p>
			</div>
		</Fragment>
	)
}

const anecdotes = [
	"If it hurts, do it more often",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"))
