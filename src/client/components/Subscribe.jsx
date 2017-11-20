import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapObjIndexed } from 'ramda'
import { unsubscribeChannels } from 'Utils/faye'

/* subscribes to provided channel callback pairs on mount */
class Subscribe extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		subscribe: PropTypes.func.isRequired,
		tasks: PropTypes.objectOf(PropTypes.func).isRequired,
	}

	constructor(props) {
		super(props)

		this.subscriptionManager = {}
	}

	componentWillMount() {
		const { tasks } = this.props

		mapObjIndexed(this.subscribe, tasks)
	}

	componentWillUnmount() {
		unsubscribeChannels(this.unsubscribe, this.subscriptionManagers)
	}

	subscribe = (callback, channel) => {
		const { subscribe } = this.props

		this.subscriptionManager[channel] = subscribe(channel, callback)
	}

	unsubscribe = (channel) => {
		this.subscriptionManager[channel].unsubscribe()
		delete this.subscriptionManager[channel]
	}

	render() {
		return this.props.children
	}
}

export default Subscribe
