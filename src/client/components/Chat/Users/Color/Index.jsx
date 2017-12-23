import React from 'react'
import PropTypes from 'prop-types'
import { ChatUserButton as Button } from 'Components/Styles'
import Pallete from './Pallete'

const Control = ({
	color,
	mute,
	handleColor,
	handleMute
}) => (
	<div>
		<Pallete
			color={color}
			handleClick={handleColor}
		/>
		<Button onClick={() => handleMute(!mute)}>
			{mute ? 'unmute' : 'mute'}
		</Button>
	</div>
)

Control.propTypes = {
	color: PropTypes.string.isRequired,
	mute: PropTypes.bool.isRequired,
	handleColor: PropTypes.func.isRequired,
	handleMute: PropTypes.func.isRequired
}

export default Control

