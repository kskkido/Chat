const compareStates = (prevStates, nextStates) =>
	prevStates.every((prevState, i) => prevState === nextStates[i])

const combineSelectors = (selectorsArr, fn) => {
	let prevStates
	let prevResults

	return (state, ...rest) => {
		const selectedStates = selectorsArr.map(selector => selector(state, ...rest))

		prevResults = prevStates && compareStates(prevStates, selectedStates) ?
			prevResults :
			(prevStates = selectedStates, fn(...selectedStates))

		return prevResults
	}
}

export default combineSelectors
