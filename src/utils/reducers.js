/* eslint-disable import/prefer-default-export */
import { compose, identity, merge, prop } from 'ramda'

export const actionCreator = (type, fn = identity) => obj => ({ type, payload: fn(obj) })

export const createReducer = (initialState, handlers) => (state = initialState, action) =>
	Object.prototype.hasOwnProperty.call(handlers, action.type) ?
		handlers[action.type](state, action) :
		state

export const createSubstateFactory = initialState => compose(merge(initialState), prop('payload'))

export const updateObject = (oldState, newState) => ({ ...oldState, ...newState })

export const updateArrayItem = (array, itemId, callback) =>
	array.map(item => item.id === itemId ? callback(item) : item)
