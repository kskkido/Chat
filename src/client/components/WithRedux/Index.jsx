import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const RenderProps = ({ children, ...props }) => children(props)

RenderProps.propTypes = {
	children: PropTypes.func.isRequired
}

const WithRedux = (mapStateToProps, mapDispatchToProps) =>
	connect(mapStateToProps, mapDispatchToProps)(RenderProps)

export default WithRedux
