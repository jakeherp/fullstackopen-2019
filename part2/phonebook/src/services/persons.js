import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getPersons = () => {
	return axios.get(baseUrl)
}

const createPerson = newObject => {
	return axios.post(baseUrl, newObject)
}

const updatePerson = (id, newObject) => {
	return axios.put(`${baseUrl}/${id}`, newObject)
}

const removePerson = id => {
	return axios.delete(`${baseUrl}/${id}`)
}

export default {
	getPersons: getPersons,
	createPerson: createPerson,
	updatePerson: updatePerson,
	removePerson: removePerson,
}
