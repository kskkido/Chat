import React from 'react'
import PropTypes from 'prop-types'
import FormController from 'Components/FormController'
import {
	AppButton as Button,
	ChatInputContainer as Container,
	ChatInputForm as Form,
	ChatInputTextArea as TextArea,
} from 'Components/Styles'

const MessageInput = ({ onMessage }) => {
	const onSubmit = ({ message }) => onMessage(message)

	return (
		<Container>
			<FormController onSubmit={onSubmit}>
				{({ handleChange, handleSubmit, inputValues }) => (
					<Form onSubmit={handleSubmit}>
						<TextArea
							name="message"
							onChange={handleChange}
							value={inputValues.message || ''}
							placeholder="send a message..."
						/>
						<Button>Send</Button>
					</Form>
				)}
			</FormController>
		</Container>
	)
}


MessageInput.propTypes = {
	onMessage: PropTypes.func.isRequired,
}

export default MessageInput
