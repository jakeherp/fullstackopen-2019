import React, { Fragment } from "react"

const Header = ({ course }) => (
	<Fragment>
		<h2>{course.name}</h2>
	</Fragment>
)

export default Header
