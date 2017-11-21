/* eslint-disable prefer-template */
import { identity } from 'ramda'

const isDev = process.env.NODE_ENV === 'development'

export const logChannelCount = isDev ? (eventManager, channel) => {
	const string = 'FAYE CLIENT\n'
								+ eventManager.subscriberCount()
								+ ' SUBSCRIBERS ON CHANNEL:\n'
								+ channel

	console.log(string)
} : identity
