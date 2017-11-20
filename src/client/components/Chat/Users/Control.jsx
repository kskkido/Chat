import React from 'react'
import PropTypes from 'prop-types'
import { ChatUserButton as Button } from 'Components/Styles'
import ColorPallete from './Color'

const Control = ({
	color,
	mute,
	handleColor,
	handleMute
}) => (
	<div>
		<ColorPallete
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

