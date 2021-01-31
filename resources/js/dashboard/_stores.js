import { writable } from 'svelte/store'

// home network transactions payments

export const view = writable('payments')

export const Helpers = {
	formatLargeString(string) {
		const start = string.substring(0, 4)
		const end = string.substring(string.length - 4)

		return `${start}...${end}`
	}
}