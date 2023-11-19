import { createSlice } from '@reduxjs/toolkit'
import { AnswerInitial } from '../../../@types/redux/Answer/types'

const initialState: AnswerInitial = {
	answersArray: [
		{
			id: 'materials',
			title: 'Из чего сделана когтеточка CatsBy?',
			text: 'Когтеточка Catsby Family сделана из натурального дуба, хлопчатобумажного каната и гипоаллергенного фильца. Дуб защищён растительными маслами и воском, которыми покрывают кухонные столешницы. Канат изготовлен из хлопкового волокна без пропиток диаметром 10 мм.',
			img: 'https://catsby-family.ru/assets/_image/catsby-scratcher-materials.jpg',
		},
		{
			id: 'secret',
			title: 'Конструкция когтеточки?',
			text: 'Мы спроектировали 124 версии когтеточки, прежде чем пришли к финальной конструкции. Получение патента на изобретение — длительный процесс, поэтому мы не хотим раньше времени рассказывать об особенностях конструкции. Внутренности столбика — одна из наших разработок. Можем показать, что находится под крышечкой — это не просто картонная или пластиковая труба.',
			img: 'https://catsby-family.ru/assets/_image/inside-catsby.jpg',
		},
	],
}
export const AnswerSlice = createSlice({
	name: 'answer',
	initialState,
	reducers: {},
})

export default AnswerSlice.reducer
