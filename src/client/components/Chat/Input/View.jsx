import React from 'react'
import PropTypes from 'prop-types'
import {
	AppButton as Button,
	ChatInputContainer as Container,
	ChatInputForm as Form,
	ChatInputTextArea as TextArea,
} from 'Components/Styles'

const View = ({
	handleChange,
	handleSubmit,
	inputValues
}) => {
	const name = 'message'
	const property = inputValues[name]
	const disabled = !property

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<TextArea
					name={name}
					value={property || ''}
					onChange={handleChange}
					placeholder="send a message..."
				/>
				<Button disabled={disabled}>
					Send
				</Button>
			</Form>
		</Container>
	)
}

View.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	inputValues: PropTypes.objectOf(PropTypes.string).isRequired
}

export default View
