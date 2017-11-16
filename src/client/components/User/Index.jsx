import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import { clientConnect } from 'Reducers/client'
import Input from './Input'

class User extends Component {
	state = {
		username: ''
	}

	onChange = str => this.setState(() => ({ username: str }))

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.signup(this.state.username)
	}

	handleChange = (e) => {
		const { value } = e.target

		this.onChange(value)
	}

	renderError() {
		const { error } = this.props

		return error.length > 0 ? <div>{error}</div> : null
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="give yourself a display name..."
					value={this.state.username}
					onChange={this.onChange}
				/>
				{this.renderError()}
			</form>
		)
	}
}

User.propTypes = {
	signup: PropType.func,
	error: PropType.string
}

User.defaultProps = {
	signup: () => {},
	error: ''
}

const mapStateToProps = state => ({ error: state.auth.error })
const mapDispatchToProps = dispatch => ({ signup:	username => dispatch(clientConnect(username)) })

export default connect(mapStateToProps, mapDispatchToProps)(User)
