import { useForm, SubmitHandler } from 'react-hook-form'
import { Inputs } from '../../../@types/redux/Cart/types'
import { useState } from 'react'
import { useAppSelector } from '../../../redux/reduxHooks/hooks'

const CartBottom = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>()

	const [activeDelivery, setActiveDelivery] = useState('Доставка')
	const [isAgree, setIsAgree] = useState(false)
	const cart = useAppSelector((state) => state.cart.cart)
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		if (isAgree) {
			const newRequest = { ...data, activeDelivery, items: cart }
			console.log(newRequest)
			reset()
		}
	}

	return (
		<div className='cart-bottom' id='cart-form'>
			<div className='cart-bottom__box'>
				<h2 className='cart__box_title'>Оформление заказа</h2>
				<form className='cart__box_form' onSubmit={handleSubmit(onSubmit)}>
					<label className='cart__input_box'>
						<input
							{...register('name', { required: 'Имя обязательное поле' })}
							placeholder='Имя'
							className='cart__form_input'
						/>
						{errors.name?.message && (
							<h4 className='cart__warning'>{errors.name.message}</h4>
						)}
					</label>
					<label className='cart__input_box'>
						<input
							{...register('surname', {
								required: 'Фамилия обязательное поле',
							})}
							placeholder='Фамилия'
							className='cart__form_input'
						/>
						{errors.surname?.message && (
							<h4 className='cart__warning'>{errors.surname.message}</h4>
						)}
					</label>
					<label className='cart__input_box'>
						<input
							{...register('email', { required: 'Email обязательное поле' })}
							placeholder='Email'
							className='cart__form_input'
						/>
						{errors.email?.message && (
							<h4 className='cart__warning'>{errors.email.message}</h4>
						)}
					</label>

					<div className='cart__box_details'>
						<div className='cart__details_item delivery'>
							<h4 className='cart__item_title'>Способ доставки</h4>
							<div className='cart__delivery_item'>
								<div
									onClick={() => setActiveDelivery('Доставка')}
									className={`cart__item_button ${
										activeDelivery == 'Доставка' ? 'active' : ''
									}`}></div>
								<h4 className='cart__item_title'>Доставка</h4>
							</div>
							<div className='cart__delivery_item'>
								<div
									onClick={() => setActiveDelivery('Cамовывоз')}
									className={`cart__item_button ${
										activeDelivery == 'Cамовывоз' ? 'active' : ''
									}`}></div>
								<h4 className='cart__item_title'>Самовывоз</h4>
							</div>
						</div>
						<div className='cart__details_item address'>
							<h4 className='cart__item_title'>Адрес доставки</h4>
							<div className='cart__address_list'>
								<label className='cart__input_box'>
									<input
										{...register('city', {
											required: 'Адрес обязательное поле',
										})}
										placeholder='Мин Обл, г.Минск'
										className='cart__list_header'
									/>
									{errors.city?.message && (
										<h4 className='cart__warning'>{errors.city.message}</h4>
									)}
								</label>
							</div>
							<div className='cart__address_form'>
								<label className='cart__input_box'>
									<input
										{...register('street', {
											required: 'Улица обязательное поле',
										})}
										placeholder='Улица'
										className='cart__form_input'
									/>
									{errors.street?.message && (
										<h4 className='cart__warning'>{errors.street.message}</h4>
									)}
								</label>

								<label className='cart__input_box three'>
									<input
										{...register('house', {
											required: 'Дом обязательное поле',
										})}
										placeholder='Дом'
										className='cart__form_input'
									/>
									{errors.house?.message && (
										<h4 className='cart__warning'>{errors.house.message}</h4>
									)}
								</label>
								<label className='cart__input_box three'>
									<input
										{...register('floor', {
											required: 'Этаж обязательное поле',
										})}
										placeholder='Этаж'
										className='cart__form_input'
									/>
									{errors.floor?.message && (
										<h4 className='cart__warning'>{errors.floor.message}</h4>
									)}
								</label>
								<label className='cart__input_box three'>
									<input
										{...register('apartment', {
											required: 'Квартира обязательное поле',
										})}
										placeholder='Кв'
										className='cart__form_input'
									/>
									{errors.apartment?.message && (
										<h4 className='cart__warning'>
											{errors.apartment.message}
										</h4>
									)}
								</label>
							</div>
						</div>
					</div>
					<div className='cart__box_comment'>
						<h4 className='cart__comment_title'>Комментарий к заказу</h4>
						<textarea
							{...register('textarea')}
							className='cart__comment_textarea'
							placeholder='Текст сообщения'
							maxLength={500}
							rows={9}></textarea>
						<div className='cart__comment_agreement'>
							<div className='cart__agreement_header'>
								<div
									onClick={() => setIsAgree(!isAgree)}
									className={`cart__agreement_button ${
										isAgree ? 'active' : ''
									}`}></div>
								<h4 className='cart__agreement_title'>
									Даю согласие на обработку <a href=''>персональных данных</a>
								</h4>
							</div>

							{!isAgree && (
								<h4 className='cart__warning'>
									Подтвердите согласие на обработку персональных данных
								</h4>
							)}
						</div>
					</div>
					<button className='cart__box_button-accept'>Оформить заказ</button>
				</form>
			</div>
		</div>
	)
}

export default CartBottom
