/* eslint-disable import/prefer-default-export */
import { identical } from 'ramda'

export const combineSelectors = (selectorsArr, fn) => {
	let previousStates
	let previousResult

	return (state, ...rest) => {
		const selectedStates = selectorsArr.map(selector => selector(state, ...rest))

		previousResult = identical(previousStates, selectedStates) ?
			previousResult :
			(previousStates = selectedStates, fn(...selectedStates))

		return previousResult
	}
}
