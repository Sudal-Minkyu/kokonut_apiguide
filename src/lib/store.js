import { writable } from 'svelte/store'

export const endpoint = writable("kokonut.me");
export const start = writable("{");
export const end = writable("}");