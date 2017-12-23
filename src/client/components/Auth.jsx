import React from 'react'
import { authRequest } from 'Actions/auth'
import WithRedux from './WithRedux'

const mapStateToProps = ({ auth }) => ({
	username: auth.username,
	error: auth.error
})
const mapDispatchToProps = dispatch => ({
	authRequest: username => dispatch(authRequest({ username }))
})

export default WithRedux(mapStateToProps, mapDispatchToProps)
