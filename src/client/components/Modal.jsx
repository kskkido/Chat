import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

class Modal extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		elementType: PropTypes.string,
		root: PropTypes.string
	}

	static defaultProps = {
		elementType: 'div',
		root: '#modal-overlay'
	}

	constructor(props) {
		super(props)

		const { elementType, root } = this.props

		this.modalChild = document.createElement(elementType)
		this.modalRoot = document.querySelector(root)
	}

	componentDidMount() {
		this.append()
	}

	componentWillUnmount() {
		this.remove()
	}

	append() {
		this.modalRoot.appendChild(this.modalChild)
	}

	remove() {
		this.modalRoot.removeChild(this.modalChild)
	}

	render() {
		return createPortal(
			this.props.children,
			this.modalChild
		)
	}
}

export default Modal
