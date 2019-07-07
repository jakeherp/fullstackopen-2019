import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"

const App = () => {
	useEffect(() => {
		const fetchPersons = async () => {
			const data = await axios.get("http://localhost:3001/persons")
			setPersons(data.data)
		}
		fetchPersons()
	}, [])

	return <div>xxx</div>
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
