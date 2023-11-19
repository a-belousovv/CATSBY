import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks/hooks'

import {
	changeComplexActiveCabel,
	changeComplexActiveMaterial,
} from '../../../redux/slices/Complex/ComplexSlice'
import { Link } from 'react-router-dom'

const Complex: React.FC = () => {
	const dispatch = useAppDispatch()
	const activeMaterial = useAppSelector((state) => state.complex.activeMaterial)
	const activeCabel = useAppSelector((state) => state.complex.activeCabel)

	const materialArray = useAppSelector((state) => state.complex.materialArray)
	const cabelArray = useAppSelector((state) => state.complex.cabelArray)
	const complexArray = useAppSelector((state) => state.catalog.catalog).find(
		(item) => item.id == 'bigComplex'
	)

	if (complexArray) {
		const findArray = complexArray.items.find(
			(obj) => obj.cabel == activeCabel && obj.material == activeMaterial
		)
		if (findArray) {
			return (
				<div className='complex' id='complex'>
					<div className='block-container'>
						<div className='complex__box'>
							<h2 className='complex__title'>Выбери свой комплекс</h2>
							<div className='complex__buttons'>
								<div className='complex__buttons_item'>
									<h3 className='complex__item_title'>
										{findArray.materialTitle}
									</h3>
									<div className='complex__item_colors'>
										{materialArray.map((item) => {
											return (
												<div
													className={`complex__colors_color ${
														item.id == activeMaterial ? 'active' : ''
													}`}
													key={item.id}
													onClick={() =>
														dispatch(changeComplexActiveMaterial(item.id))
													}>
													<img src={item.src} alt='' />
												</div>
											)
										})}
									</div>
								</div>
								<div className='complex__buttons_item'>
									<h3 className='complex__item_title'>
										{findArray.cabelTitle}
									</h3>
									<div className='complex__item_colors'>
										{cabelArray.map((item) => {
											return (
												<div
													className={`complex__colors_color ${
														item.id == activeCabel ? 'active' : ''
													}`}
													key={item.id}
													onClick={() =>
														dispatch(changeComplexActiveCabel(item.id))
													}>
													<img src={item.src} alt='' />
												</div>
											)
										})}
									</div>
								</div>
							</div>
							<div className='complex__items'>
								{findArray.items.map((item) => {
									return (
										<Link
											to={`/${complexArray.id}/${findArray.id}/${item.itemId}`}
											className='complex__items_item'
											key={item.itemId}
											onClick={() => window.scrollTo(0, 0)}>
											<div className='complex__item_img'>
												<img src={item.src} alt='' />
											</div>
											<div className='complex__item_content'>
												<div className='complex__item_header'>
													<h3 className='complex__header_title'>
														{item.price}
													</h3>
													<h3 className='complex__header_title discount'>
														{item.priceDiscount}
													</h3>
												</div>
												<div className='complex__item_info'>
													<p className='complex__info_text'>{item.title}</p>
												</div>
											</div>
										</Link>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default Complex
