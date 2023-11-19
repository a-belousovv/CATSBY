import { ComplexItemsItem } from '../ComplexTypes/types'

export interface CartInitialState {
	cart: ComplexItemsItem[]
	totalCount: number
	totalSum: number
}

export interface Inputs {
	name: string
	surname: string
	email: string
	phoneNumber: string
	city: string
	street: string
	house: string
	floor: string
	apartment: string
	textarea?: string
}

export interface CartInputProps {
	regTitle: Inputs
	title: string
}
