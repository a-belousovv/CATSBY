import React from 'react'

import TitleOrange from '../../share/TitleOrange/TitleOrange'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks/hooks'

import {
	changeCombinatioActiveMaterial,
	changeCombinationActiveCabel,
} from '../../../redux/slices/Combination/CombinationSlice'

const Combination: React.FC = () => {
	const dispatch = useAppDispatch()
	const materialArray = useAppSelector(
		(state) => state.combination.materialArray
	)
	const cabelArray = useAppSelector((state) => state.combination.cabelArray)

	const activeMaterial = useAppSelector(
		(state) => state.combination.activeMaterial
	)
	const activeCabel = useAppSelector((state) => state.combination.activeCabel)

	const combinationArray = useAppSelector(
		(state) => state.combination.combinationArray
	)

	const findItem = combinationArray.find(
		(obj) => obj.cabel == activeCabel && obj.material == activeMaterial
	)
	if (findItem) {
		return (
			<div className='combination'>
				<div className='block-container'>
					<div className='combination__box'>
						<div className='combination__item ' key={findItem.id}>
							<div className='combination__img'>
								<img src={findItem.src} alt='' />
							</div>
							<div className='combination__content'>
								<TitleOrange text='Комбинация для вашего интерьера' />
								<div className='combination__choose_block'>
									<h3 className='combination__choose_title'>
										{findItem.materialTitle}
									</h3>
									<div className='combination__options_block'>
										{materialArray.map((item) => {
											return (
												<div
													onClick={() =>
														dispatch(changeCombinatioActiveMaterial(item.id))
													}
													key={item.id}
													className={`combination__choose_options ${
														activeMaterial == item.id ? 'active' : ''
													} `}>
													<img src={item.src} alt='' />
												</div>
											)
										})}
									</div>
								</div>
								<div className='combination__choose_block'>
									<h3 className='combination__choose_title'>
										{findItem.cabelTitle}
									</h3>
									<div className='combination__options_block'>
										{cabelArray.map((item) => {
											return (
												<div
													onClick={() =>
														dispatch(changeCombinationActiveCabel(item.id))
													}
													key={item.id}
													className={`combination__choose_options ${
														activeCabel == item.id ? 'active' : ''
													} `}>
													<img src={item.src} alt='' />
												</div>
											)
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Combination
