/* eslint-disable prefer-template */
import { identity } from 'ramda'

const isDev = process.env.NODE_ENV === 'development'

export const logChannelCount = isDev ? (eventManager, channel, browser = true) => {
	const string = 'FAYE CLIENT\n'
								+ eventManager.subscriberCount()
								+ ' SUBSCRIBERS ON'
								+ browser ? 'BROWSER ' : 'TCP'
								+ 'CHANNEL:\n'
								+ channel

	console.log(string)
} : identity
