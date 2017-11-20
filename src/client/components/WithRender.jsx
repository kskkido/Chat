import React from 'react'
import PropTypes from 'prop-types'

/* use to convert connect HOC into renderProps */
const Render = ({ children, ...props }) => children(props)

Render.propTypes = {
	children: PropTypes.func.isRequired
}

export default Render
