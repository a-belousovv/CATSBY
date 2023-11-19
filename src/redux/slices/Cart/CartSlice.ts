import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartInitialState } from '../../../@types/redux/Cart/types'
import { ComplexItemsItem } from '../../../@types/redux/ComplexTypes/types'

const initialState: CartInitialState = {
	cart: [],
	totalCount: 0,
	totalSum: 0,
}
export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addNewCartItem: (state, action: PayloadAction<ComplexItemsItem>) => {
			const findItem = state.cart.find(
				(obj) => obj.itemId == action.payload.itemId
			)
			if (findItem) {
				if (findItem.count < 10) {
					if (findItem.title == action.payload.title) {
						findItem.count++
					}
				}
			} else {
				const newCartItem = { ...action.payload, count: 1 }
				state.cart.unshift(newCartItem)
			}
		},
		removeCartItem: (state, action: PayloadAction<string>) => {
			state.cart = state.cart.filter((obj) => obj.itemId !== action.payload)
		},
		incrementCartItem: (state, action: PayloadAction<string>) => {
			const findItem = state.cart.find((obj) => obj.itemId == action.payload)

			if (findItem) {
				if (findItem.count < 10) {
					findItem.count++
				}
			}
		},
		decrementCartItem: (state, action: PayloadAction<string>) => {
			const findItem = state.cart.find((obj) => obj.itemId == action.payload)

			if (findItem) {
				if (findItem.count >= 1) {
					findItem.count--
				}
			}
		},
		changeTotalCount: (state, action) => {
			state.totalCount = action.payload
		},
		changeTotalSum: (state, action) => {
			state.totalSum = action.payload
		},
	},
})

export const {
	addNewCartItem,
	incrementCartItem,
	decrementCartItem,
	removeCartItem,
	changeTotalCount,
	changeTotalSum,
} = CartSlice.actions
export default CartSlice.reducer
