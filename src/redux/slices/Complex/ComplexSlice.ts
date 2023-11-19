import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ComplexInitialState } from '../../../@types/redux/ComplexTypes/types'

const initialState: ComplexInitialState = {
	materialArray: [
		{
			id: 'input-oak-natural',
			src: '/pictures/combination/inputs/oak-natural.png',
		},
		{
			id: 'input-oak-light',
			src: '/pictures/combination/inputs/oak-light.png',
		},
		{
			id: 'input-oak-dark',
			src: '/pictures/combination/inputs/oak-dark.png',
		},
	],
	cabelArray: [
		{
			id: 'input-roke-white',
			src: '/pictures/combination/inputs/rope-white.png',
		},
		{
			id: 'input-roke-black',
			src: '/pictures/combination/inputs/rope-black.png',
		},
	],
	activeMaterial: 'input-oak-natural',
	activeCabel: 'input-roke-white',
}
export const ComplexSlice = createSlice({
	name: 'complex',
	initialState,
	reducers: {
		changeComplexActiveMaterial: (state, action: PayloadAction<string>) => {
			state.activeMaterial = action.payload
		},
		changeComplexActiveCabel: (state, action: PayloadAction<string>) => {
			state.activeCabel = action.payload
		},
	},
})

export const { changeComplexActiveMaterial, changeComplexActiveCabel } =
	ComplexSlice.actions

export default ComplexSlice.reducer
