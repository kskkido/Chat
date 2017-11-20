import React, { Component } from 'react'
import PropType from 'prop-types'
import FormController from './FormController'
import {
	AppButton as Button,
	UserCard as Card,
	UserFormContainer as Form,
} from './Styles'

const UserInput = ({ authRequest, error }) => {
	const onSubmit = ({ username }) => authRequest(username)

	return (
		<Card>
			<FormController onSubmit={onSubmit} >
				{({ handleChange, handleSubmit, inputValues }) => (
					<Form onSubmit={handleSubmit}>
						<input
							name="username"
							onChange={handleChange}
							value={inputValues.username || ''}
							placeholder="give yourself a name..."
						/>
						{error.length > 0 && (
							<div>
								{error}
							</div>
						)}
						<Button>
							clit me
						</Button>
					</Form>
				)}
			</FormController>
		</Card>
	)
}

UserInput.propTypes = {
	authRequest: PropType.func.isRequired,
	error: PropType.string
}

UserInput.defaultProps = {
	error: ''
}

export default UserInput