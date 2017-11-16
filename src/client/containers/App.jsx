/* global Faye, window */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// do some env checks
const App = props => <div>{props.children}</div>

App.propTypes = {
	children: PropTypes.element
}

App.defaultProps = {
	children: []
}

export default App
