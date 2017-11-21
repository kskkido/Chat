import React, { Component } from 'react'
import PropType from 'prop-types'
import FormController from './FormController'
import {
	AppButton as Button,
	AppError as Error,
	AppOverlay as Overlay,
	UserCard as Card,
	UserFormContainer as Form,
	UserInput as Input,
} from './Styles'

/* register username */
const Register = ({ authRequest, error }) => {
	const onSubmit = ({ username }) => authRequest(username)

	return (
		<Overlay>
			<FormController onSubmit={onSubmit} >
				{({ handleChange, handleSubmit, inputValues }) => (
					<Form onSubmit={handleSubmit}>
						<Input
							name="username"
							onChange={handleChange}
							value={inputValues.username || ''}
							placeholder="give yourself a name..."
							onKeyPress={e => isEnter(e) && handleSubmit()}
						/>
						{error.length > 0 && (
							<Error>
								{error}
							</Error>
						)}
					</Form>
				)}
			</FormController>
		</Overlay>
	)
}

Register.propTypes = {
	authRequest: PropType.func.isRequired,
	error: PropType.string
}

Register.defaultProps = {
	error: ''
}

function isEnter({ nativeEvent: { keyCode } }) {
	return keyCode === 13
}

export default Register
