export function* idGenerator() {
	let number = 0

	while (true) {
		yield number += 1
	}
}

export const pleaser = () => {}
