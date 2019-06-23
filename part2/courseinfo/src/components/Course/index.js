import React, { Fragment } from "react"

import Header from "./Header"
import Content from "./Content"

const Course = ({ course }) => (
	<Fragment>
		<Header course={course} />
		<Content parts={course.parts} />
	</Fragment>
)

export default Course
