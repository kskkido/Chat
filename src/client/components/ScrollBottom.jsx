import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* scrolls to the bottom of child element when watch prop changes */
class ScrollBottom extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		watch: PropTypes.number
	}

	static defaultProps = {
		watch: 0
	}

	componentDidUpdate(nextProps) {
		if (this.props.watch !== nextProps.watch) {
			const { scrollHeight } = this.target

			this.target.scrollTop = scrollHeight
		}
	}

	receiveRef = (el) => { this.target = el }

	renderChildren = () => {
		const { children } = this.props
		const child = React.Children.only(children)

		/*
			runs with the assumption that child is styled-component instance
			find better way to get child ref
		*/
		return React.cloneElement(child, {
			innerRef: this.receiveRef
		})
	}

	render() {
		return this.renderChildren()
	}
}

export default ScrollBottom
