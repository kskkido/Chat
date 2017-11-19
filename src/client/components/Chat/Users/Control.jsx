import React from 'react'
import PropTypes from 'prop-types'

const colors = {

}

const Control = ({
	color,
	mute,
	handleColor,
	handleMute
}) => (
	<div>
		<button
			onClick={() => handleMute(!mute)}
		>
			{mute ? 'unmute' : 'mute'}
		</button>
	</div>
)

Control.propTypes = {
	color: PropTypes.string.isRequired,
	mute: PropTypes.bool.isRequired,
	handleColor: PropTypes.func.isRequired,
	handleMute: PropTypes.func.isRequired
}

export default Control

