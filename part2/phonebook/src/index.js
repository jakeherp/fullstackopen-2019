import React, { useState } from "react"
import ReactDOM from "react-dom"

import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456" },
		{ name: "Ada Lovelace", number: "39-44-5323523" },
		{ name: "Dan Abramov", number: "12-43-234345" },
		{ name: "Mary Poppendieck", number: "39-23-6423122" },
	])
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")

	const [filterName, setFilterName] = useState("")

	const handleNameChange = e => setNewName(e.target.value)

	const handleNumberChange = e => setNewNumber(e.target.value)

	const handleFilter = e => setFilterName(e.target.value)

	const filteredContacts = !filterName
		? persons
		: persons.filter(person => person.name.includes(filterName))

	const resetForm = () => {
		setNewName("")
		setNewNumber("")
	}

	const addPerson = e => {
		e.preventDefault()

		const contacts = [...persons]
		const res = contacts.find(person => person.name === newName)
		if (res) {
			return alert(`${newName} is already added to phonebook`)
		}
		if (newName && newNumber) {
			setPersons([...persons, { name: newName, number: newNumber }])
			resetForm()
		}
	}

	return (
		<div>
			<h1>Phonebook</h1>
			<Filter value={{ filterName }} handler={{ handleFilter }} />
			<h2>Add a new contact</h2>
			<PersonForm
				values={{ newName, newNumber }}
				handlers={{
					handleNameChange,
					handleNumberChange,
					addPerson,
				}}
			/>
			<h2>Numbers</h2>
			<Persons persons={filteredContacts} />
		</div>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
