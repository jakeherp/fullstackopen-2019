import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import personsService from "./services/persons"

import Filter from "./components/Filter"
import Notification from "./components/Notification"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

import "./styles/index.css"

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")
	const [filterName, setFilterName] = useState("")
	const [notification, setNotification] = useState({})

	useEffect(() => {
		personsService.getPersons().then(res => {
			setPersons(res.data)
		})
	}, [])

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
			const confirm = window.confirm(
				`${newName} is already added to phonebook, replace the old number with a new one?`,
			)
			confirm &&
				personsService
					.updatePerson(res.id, { ...res, number: newNumber })
					.then(updatedPerson => {
						let updatedPersons = persons.filter(
							person => person.id !== updatedPerson.id,
						)
						console.log(updatedPersons)
						updatedPersons = [...updatedPersons, updatedPerson]
						console.log(updatedPersons)
						setPersons(updatedPersons)
						resetForm()
						setNotification({
							message: `Person was updated!`,
							type: `success`,
						})
						setTimeout(() => {
							setNotification({})
						}, 5000)
					})
		} else if (newName && newNumber) {
			personsService
				.createPerson({
					name: newName,
					number: newNumber,
					id: persons.length + 1,
				})
				.then(res => {
					setPersons([...persons, res.data])
					setNotification({
						message: `Person was added`,
						type: `success`,
					})
					setTimeout(() => {
						setNotification({})
					}, 5000)
				})
			resetForm()
		}
	}

	const removePerson = id => {
		personsService
			.removePerson(id)
			.then(() => {
				const updatedPersons = persons.filter(
					person => person.id !== id,
				)
				setPersons(updatedPersons)
				setNotification({
					message: `Person was removed`,
					type: `success`,
				})
				setTimeout(() => {
					setNotification({})
				}, 5000)
			})
			.catch(err => {
				setNotification({
					message: `Person was already removed from the server`,
					type: `error`,
				})
				setTimeout(() => {
					setNotification({})
				}, 5000)
			})
	}

	return (
		<div>
			<h1>Phonebook</h1>
			{notification && (
				<Notification
					message={notification.message}
					type={notification.type}
				/>
			)}
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
			<Persons persons={filteredContacts} removePerson={removePerson} />
		</div>
	)
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
