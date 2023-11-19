import { ComplexItemsItem } from '../../../@types/redux/ComplexTypes/types'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks/hooks'
import {
	decrementCartItem,
	incrementCartItem,
	removeCartItem,
} from '../../../redux/slices/Cart/CartSlice'

const CartTop = () => {
	const dispatch = useAppDispatch()

	const cart = useAppSelector((state) => state.cart.cart)

	const totalCount = cart.reduce(
		(sum: number, item: ComplexItemsItem) => sum + item.count,
		0
	)
	const totalSum = cart.reduce(
		(sum: number, item: ComplexItemsItem) =>
			sum + (item.priceDiscount ? item.priceDiscount : item.price) * item.count,
		0
	)

	const handleClick = () => {
		if (cart.length != 0) {
			window.scrollTo(0, 1050)
		}
	}

	return (
		<div className='cart-top'>
			<div className='block-container'>
				<div className='cart-top__box'>
					<div className='cart-top__left'>
						<div className='cart-top__path'>
							<h3 className='cart-top__path_title'>
								Интернет-магазин-когтеточек
							</h3>
							<h3 className='cart-top__path_title'>/</h3>
							<h3 className='cart-top__path_title'>Корзина</h3>
						</div>
						<div className='cart-top__header'>
							<h2 className='cart-top__header_title'>Ваша корзина</h2>
						</div>
						<div className='cart-top__items'>
							{cart.map((item) => {
								return (
									<div className='cart-top__items_item' key={item.itemId}>
										<div className='cart-top__item_img'>
											<img src={item.src} alt='' />
										</div>
										<div className='cart-top__item_content'>
											<div className='cart-top__content_top'>
												<div className='cart-top__top_header'>
													<h3 className='cart-top__header_title'>
														{item.title} <span>31553</span>
													</h3>
													<div
														onClick={() =>
															dispatch(removeCartItem(item.itemId))
														}
														className='cart-top__header_button-close'>
														<img
															src='/icons/cart-top/button-close.svg'
															alt=''
														/>
													</div>
												</div>
												<div className='cart-top__top_content'>
													<p className='cart-top__content_text'>
														{item.info.description}
													</p>
												</div>
											</div>
											<div className='cart-top__content_bottom'>
												<div className='cart-top__bottom_counter'>
													<div
														className={`cart-top__counter_button minus ${
															item.count > 1 ? 'active' : ''
														}`}
														onClick={() =>
															dispatch(decrementCartItem(item.itemId))
														}>
														-
													</div>
													<h3 className='cart-top__bottom_count'>
														{item.count}
													</h3>
													<div
														className={`cart-top__counter_button plus ${
															item.count < 10 ? 'active' : ''
														}`}
														onClick={() =>
															dispatch(incrementCartItem(item.itemId))
														}>
														+
													</div>
												</div>
												<h3 className='cart-top__bottom_price'>
													{item.priceDiscount ? item.priceDiscount : item.price}
												</h3>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
					<div className='cart-top__right'>
						<div className='cart-top__right_payment'>
							<div className='cart-top__payment_totalCount'>
								<h3 className='cart-top__totalCount_title'>
									Итого {totalCount} товара на сумму:
								</h3>
							</div>
							<div className='cart-top__payment_totalSum'>
								<h3 className='cart-top__totalSum_title'>
									{Math.floor(totalSum * 1000) / 1000}
								</h3>
							</div>
							<button
								onClick={() => handleClick()}
								className='cart-top__payment_button-accept'>
								Перейти к оформлению
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartTop
