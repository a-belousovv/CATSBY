import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { NavigationInitial } from '../../../@types/redux/Navigation/types'

const initialState: NavigationInitial = {
	isBurger: false,
	navigationItems: [
		{ id: 'catalog', content: 'Каталог' },
		{ id: 'gallery', content: 'Галерея' },
		{ id: 'answers', content: 'Вопрос-ответ' },
		{ id: 'guarantee', content: 'Гарантия' },
		{ id: 'contacts', content: 'Контакты' },
	],
}
export const NavigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setIsBurger: (state, action: PayloadAction<boolean>) => {
			state.isBurger = action.payload
		},
	},
})

export const { setIsBurger } = NavigationSlice.actions

export default NavigationSlice.reducer
