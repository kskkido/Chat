import Rx from 'rxjs'
import { compose, invoker, mapObjIndexed } from 'ramda'

const observableFactory = handlerFn => compose(Rx.Observable.create, handlerFn)
const multicastFactory = observable => observable.multicast(new Rx.Subject())

const channelObservableFactory = observableFactory((client, channel) => (obs) => {
	const subscription = client.subscribe(channel, message => obs.next(message))

	return {
		unsubscribe: () => subscription.cancel()
	}
})

/*
	creates observable multicast with refcount which automatically connects upon subscription and
	unconnects when all subscribers unsubscribe
*/
export const createChannel = compose(
	invoker(0, 'refCount'),
	multicastFactory,
	channelObservableFactory
)

export const unsubscribeChannels = (unsubscribeFn, managerObj) =>
	mapObjIndexed((_, channel) => unsubscribeFn(channel), managerObj)
