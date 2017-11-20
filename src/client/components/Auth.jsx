import React from 'react'
import { connect } from 'react-redux'
import { authRequest } from 'Reducers/auth'
import WithRender from './WithRender'

const mapStateToProps = ({ auth }) => ({ username: auth.username, error: auth.error })
const mapDispatchToProps = dispatch => ({ authRequest: username => dispatch(authRequest(username)) })

export default connect(mapStateToProps, mapDispatchToProps)(WithRender)
