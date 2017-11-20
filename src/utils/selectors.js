/* eslint-disable import/prefer-default-export */
import { identical } from 'ramda'

const compareStates = (prevStates, nextStates) =>
	prevStates.every((prevState, i) => identical(prevState, nextStates[i]))

export const combineSelectors = (selectorsArr, fn) => {
	let prevStates
	let prevResults

	return (state, ...rest) => {
		const selectedStates = selectorsArr.map(selector => selector(state, ...rest))
		console.log(prevStates, selectedStates, 'why')
		prevResults = prevStates && compareStates(prevStates, selectedStates) ?
			prevResults :
			(prevStates = selectedStates, fn(...selectedStates))

		return prevResults
	}
}
