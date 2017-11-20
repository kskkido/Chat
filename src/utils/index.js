import {
	channelObservableFactory,
	channelMulticastFactory,
	observableFactory,
	multicastFactory,
} from './observables'

import {
	actionCreator,
	createReducer,
	createSubstateFactory,
	updateObject,
	updateArrayItem,
} from './reducers'

import {
	combineSelectors
} from './selectors'

module.exports = {
	actionCreator,
	channelObservableFactory,
	channelMulticastFactory,
	combineSelectors,
	createReducer,
	createSubstateFactory,
	multicastFactory,
	observableFactory,
	updateObject,
	updateArrayItem,
}
