/* global Faye, window */
import React, { Component } from 'react'
import Chat from '../components/Chat'

class ChatContainer extends Component {
	componentWillMount() {
		this.client = new Faye.Client(`${window.location.pathname}/faye`)
	}

	componentWillUnmount() {
		// do some disconnect stuff
	}

	render() {
		return <Chat client={this.client} />
	}
}

export default ChatContainer
