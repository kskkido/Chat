import Rx from 'rxjs'
import { compose, invoker } from 'ramda'

export const observableFactory = handlerFn => compose(Rx.Observable.create, handlerFn)

export const multicastFactory = observable => observable.multicast(new Rx.Subject())

export const channelObservableFactory = observableFactory((client, channel) => (obs) => {
	const subscription = client.subscribe(channel, message => obs.next(message))

	return {
		unsubscribe: () => subscription.cancel()
	}
})
export const channelMulticastFactory = compose(invoker(0, 'refCount'), multicastFactory, channelObservableFactory)


// const multiplyBy10 = input =>
// 	observableFactory(() => (obs) => {
// 		input.subscribe(x => obs.next(x * 10))
// 	})()

// const mapObservable = f =>
// 	observableFactory(input => (obs) => {
// 		input.subscribe(x => obs.next(f(x)))
// 	})

// const storeObservable = observableFactory(store => (obs) => {
// 	const dispose = store.subscribe(() => obs.next(store.getState()))

// 	obs.next(store.getState())
// 	return {
// 		unsubscribe: dispose
// 	}
// })

// const observeByIds = storeOb => storeOb.pluck('users', 'byId')
