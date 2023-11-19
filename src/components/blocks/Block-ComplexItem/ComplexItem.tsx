import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks/hooks'
import { Link } from 'react-router-dom'
import {
	addNewCartItem,
	decrementCartItem,
} from '../../../redux/slices/Cart/CartSlice'
import { ComplexItemsItem } from '../../../@types/redux/ComplexTypes/types'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
const ComplexItem = () => {
	const { category, id, itemId } = useParams()
	const dispatch = useAppDispatch()
	const itemsArray = useAppSelector((state) => state.catalog.catalog).find(
		(item) => item.id == category
	)
	const cart = useAppSelector((state) => state.cart.cart)
	const findCartItem = cart.find((obj) => obj.itemId == itemId)
	const handleClick = (item: ComplexItemsItem, params: string) => {
		switch (params) {
			case 'add':
				dispatch(addNewCartItem(item))
				break
			case 'remove':
				dispatch(decrementCartItem(item.itemId))
				break
		}
	}

	if (itemsArray) {
		const findArray = itemsArray.items.find((obj) => obj.id == id)
		if (findArray) {
			const findItem = findArray.items.find((item) => item.itemId == itemId)
			if (findItem) {
				return (
					<div className='complexItem'>
						<div className='block-container'>
							<div className='complexItem__button-return'>
								<Link
									to='/catalog'
									className='complexItem__button_title-return'>
									Каталог
								</Link>
							</div>
							<div className='complexItem__box'>
								<div className='complexItem__left'>
									<div className='complexItem__header'>
										<h2 className='complexItem__header_title'>
											{findItem.title}
										</h2>
									</div>

									{window.innerWidth <= 1000 ? (
										<Swiper className='complexItem__content_slider'>
											{findItem.info.src.map((item, i) => {
												return (
													<SwiperSlide key={i}>
														<div className='complex__slider_item'>
															<img src={item} alt='' />
														</div>
													</SwiperSlide>
												)
											})}
										</Swiper>
									) : (
										<div className='complexItem__content'>
											<div className='complexItem__content_slider'>
												{findItem.info.src.map((item, i) => {
													return (
														<div key={i} className='complexItem__slider_item'>
															<img src={item} alt='' />
														</div>
													)
												})}
											</div>

											<div className='complexItem__content_img'>
												<img src={findItem.src} alt='' />
											</div>
										</div>
									)}
									<div className='complexItem__content_characteristics'>
										<h3 className='complexItem__characteristics_title'>
											Характеристики
										</h3>
										{findItem.characteristics.map((item, i) => {
											return (
												<div
													className='complexItem__characteristics_item'
													key={i}>
													<h4 className='complexItem__item_title'>
														{item.title}
													</h4>
													<p className='complexItem__item_text'>{item.text}</p>
												</div>
											)
										})}
									</div>
									<div className='complexItem__content_info'>
										<h3 className='complexItem__info_title'>Описание</h3>
										{window.innerWidth <= 1000 ? (
											<Swiper className='complexItem__info_imgs'>
												{findItem.info.src.map((item, i) => {
													return (
														<SwiperSlide key={i}>
															<div className='complex__slider_item'>
																<img src={item} alt='' />
															</div>
														</SwiperSlide>
													)
												})}
											</Swiper>
										) : (
											<div className='complexItem__info_imgs'>
												<div className='complexItem__img_left'>
													<img src={findItem.info.src[0]} alt='' />
												</div>
												<div className='complexItem__img_right'>
													<div className='complex__right_item two'>
														<img src={findItem.info.src[1]} alt='' />
														<img src={findItem.info.src[2]} alt='' />
													</div>
													<div className='complex__right_item three'>
														<img src={findItem.info.src[3]} alt='' />
														<img src={findItem.info.src[4]} alt='' />
														<img src={findItem.info.src[5]} alt='' />
													</div>
													<div className='complex__right_item four'>
														<img src={findItem.info.src[6]} alt='' />
														<img src={findItem.info.src[7]} alt='' />
														<img src={findItem.info.src[8]} alt='' />
														<img src={findItem.info.src[9]} alt='' />
													</div>
												</div>
											</div>
										)}

										<div className='complexItem__info_texts'>
											{findItem.info.description.map((item, i) => {
												return (
													<p key={i} className='complexItem__texts_text'>
														{item}
													</p>
												)
											})}
										</div>
									</div>
								</div>
								<div className='complexItem__right'>
									<div className='complexItem__right_sidebar'>
										<div className='complex__sidebar_header'>
											<h3 className='complexItem__sidebar_title'>
												{findItem.price}
											</h3>
											<h3 className='complexItem__sidebar_title-discount'>
												{findItem.priceDiscount}
											</h3>
										</div>

										<div className='complexItem__sidebar_isThere'>
											<div className='complexItem__isThere_img'>
												<img src='/icons/complexItem/isThere-true.svg' alt='' />
											</div>
											<h3 className='complexItem__isThere_title'>В наличии</h3>
										</div>
										{findCartItem ? (
											<div className='complexItem__sidebar_buttonSomeItems'>
												<div
													onClick={() => handleClick(findItem, 'remove')}
													className='complexItem__someItems_minus'></div>
												<div className='complexItem__someItem_count'>
													{findCartItem?.count} шт в корзине
												</div>
												<div
													onClick={() => handleClick(findItem, 'add')}
													className='complexItem__someItems_plus'></div>
											</div>
										) : (
											<button
												onClick={() => handleClick(findItem, 'add')}
												className='complexItem__sidebar_cart-button'>
												Добавить в корзину
											</button>
										)}
										<div className='complexItem__sidebar_info'>
											<div className='complexItem__info_item'>
												<div className='complexItem__item_img'>
													<img src='/icons/complexItem/guarantee.svg' alt='' />
												</div>
												<h4 className='complexItem__item_title'>
													Гарантия лёгкого возврата в течение 7 дней с момента
													получения
												</h4>
											</div>
											<div className='complexItem__info_item'>
												<div className='complexItem__item_img'>
													<img
														src='/icons/complexItem/delivery-russia.svg'
														alt=''
													/>
												</div>
												<h4 className='complexItem__item_title'>
													Доставка по России до двери
												</h4>
											</div>
											<div className='complexItem__info_item'>
												<div className='complexItem__item_img'>
													<img
														src='/icons/complexItem/delivery-world.svg'
														alt=''
													/>
												</div>
												<h4 className='complexItem__item_title'>
													Доставка по миру EMS, TNT, Почтой России
												</h4>
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
	}
}

export default ComplexItem
