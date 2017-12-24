import React from 'react'
import PropTypes from 'prop-types'
import FormController from 'Components/FormController'
import View from './View'

const MessageInput = ({ onMessage }) => {
	const onSubmit = ({ message }) => onMessage(message)

	return (
		<FormController onSubmit={onSubmit}>
			{props => <View {...props} />}
		</FormController>
	)
}

MessageInput.propTypes = {
	onMessage: PropTypes.func.isRequired,
}

export default MessageInput
