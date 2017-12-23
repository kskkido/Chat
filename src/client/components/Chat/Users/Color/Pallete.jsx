import React from 'react'
import PropTypes from 'prop-types'
import { COLORS } from 'Constants'
import {
	ColorTable as Table,
	ColorCell as TableCell
} from 'Components/Styles'

const COLOR_KEYS = Reflect.ownKeys(COLORS)

const ColorPallete = ({ color, handleClick }) => (
	<Table>
		{COLOR_KEYS.map((key) => {
			const COLOR = COLORS[key]

			return (
				<li key={key}>
					<TableCell
						active={color === COLOR}
						color={COLOR}
						onClick={() => handleClick(COLOR)}
					/>
				</li>
			)
		})}
	</Table>
)


ColorPallete.propTypes = {
	color: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired
}

export default ColorPallete
