import { CombinationInitialState } from './../../../@types/redux/Combination/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: CombinationInitialState = {
	materialArray: [
		{
			src: '/pictures/combination/inputs/oak-natural.png',
			id: 'oak-natural',
		},
		{
			src: '/pictures/combination/inputs/oak-light.png',
			id: 'oak-light',
		},
		{
			src: '/pictures/combination/inputs/oak-dark.png',
			id: 'oak-dark',
		},
	],
	cabelArray: [
		{
			src: '/pictures/combination/inputs/rope-white.png',
			id: 'roke-white',
		},
		{
			src: '/pictures/combination/inputs/rope-black.png',
			id: 'roke-black',
		},
	],
	activeMaterial: 'oak-natural',
	activeCabel: 'roke-white',
	combinationArray: [
		{
			materialTitle: 'Натуральный дуб',
			cabelTitle: 'Белый канат',
			material: 'oak-natural',
			cabel: 'roke-white',
			src: '/pictures/combination/items/wall-natural-white-light.jpg',
			id: 'oakNatural-rokeWhite',
		},
		{
			materialTitle: 'Белёный дуб',
			cabelTitle: 'Белый канат',
			material: 'oak-light',
			cabel: 'roke-white',
			src: '/pictures/combination/items/wall-light-white-light.jpg',
			id: '',
		},
		{
			materialTitle: 'Тёмный дуб',
			cabelTitle: 'Белый канат',
			material: 'oak-dark',
			cabel: 'roke-white',
			src: '/pictures/combination/items/wall-dark-white-light.jpg',
			id: '',
		},
		{
			materialTitle: 'Натуральный дуб',
			cabelTitle: 'Чёрный канат',
			material: 'oak-natural',
			cabel: 'roke-black',
			src: '/pictures/combination/items/wall-natural-black-light.jpg',
			id: '',
		},
		{
			materialTitle: 'Белёный дуб',
			cabelTitle: 'Чёрный канат',
			material: 'oak-light',
			cabel: 'roke-black',
			src: '/pictures/combination/items/wall-light-black-light.jpg',
			id: '',
		},
		{
			materialTitle: 'Тёмный дуб',
			cabelTitle: 'Чёрный канат',
			material: 'oak-dark',
			cabel: 'roke-black',
			src: '/pictures/combination/items/wall-dark-black-light.jpg',
			id: '',
		},
	],
}
export const CombinationSlice = createSlice({
	name: 'combination',
	initialState,
	reducers: {
		changeCombinatioActiveMaterial: (state, action: PayloadAction<string>) => {
			state.activeMaterial = action.payload
		},
		changeCombinationActiveCabel: (state, action: PayloadAction<string>) => {
			state.activeCabel = action.payload
		},
	},
})

export const { changeCombinatioActiveMaterial, changeCombinationActiveCabel } =
	CombinationSlice.actions
export default CombinationSlice.reducer
