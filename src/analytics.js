function createAnalytics() {
	let counter = 0
	let destroyed = false

	const listener = () => counter++

	document.addEventListener('click', listener)

	return {
		destroy() {
			document.removeEventListener('click', listener)
			destroyed = true
		},

		getClicks() {
			if (destroyed) {
				return 'Analytics is destroyed. Total clicks = ${counter}'
			}
			return counter
		},

		showClicks() {
			if (!destroyed) {
				return 'Click\'s number = ${counter}'
			}
			return counter
		}
	}
}

window.analytics = createAnalytics()