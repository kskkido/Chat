import React from 'react'
import PropTypes from 'prop-types'
import { identity } from 'ramda'

/* provides submit handler, change handler, and value to its child components */
/* child input components must be given a name as its props */
class FormController extends React.Component {
	static propTypes = {
		children: PropTypes.func.isRequired,
		onSubmit: PropTypes.func,
	}

	static defaultProps = {
		onSubmit: identity
	}

	state = {
		inputValues: {}
	}

	onChange = updateFn => this.setState(({ inputValues }) => ({
		inputValues: updateFn(inputValues)
	}))

	handleChange = (e) => {
		const { name, value } = e.target

		this.onChange(inputValues => ({
			...inputValues,
			[name]: value
		}))
	}

	handleSubmit = (e) => {
		if (e) {
			e.preventDefault()
		}

		this.props.onSubmit(this.state.inputValues)
		this.setState(() => ({ inputValues: {} }))
	}

	render() {
		const { inputValues } = this.state
		const { children } = this.props

		return children({
			inputValues,
			handleChange: this.handleChange,
			handleSubmit: this.handleSubmit
		})
	}
}

export default FormController
