import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../redux/reduxHooks/hooks'

const Footer: React.FC = () => {
	const items = useAppSelector((state) => state.navigation.navigationItems)
	return (
		<div className='footer'>
			<div className='block-container'>
				<div className='footer__box'>
					<div className='footer__header'>
						<div className='footer__header_img'>
							<img src='/icons/footer/footer-logo.svg' alt='' />
						</div>
						<div className='footer__header_items'>
							{items.map((item) => {
								return (
									<Link
										key={item.id}
										to={`/${item.id}`}
										className='footer__items_item'>
										{item.content}
									</Link>
								)
							})}
						</div>
					</div>
					<div className='footer__hr'></div>
					<div className='footer__bottom'>
						<div className='footer__bottom-left'>
							<h4 className='footer__bottom_item-left'>
								Политика обработки персональных данных
							</h4>
							<h4 className='footer__bottom_item-left'>Оферта</h4>
						</div>
						<div className='footer__bottom-right'>
							<div className='footer__banks_item'>
								<img src='/icons/footer/footer-halva.svg' alt='' />
							</div>
							<div className='footer__banks_item'>
								<img src='/icons/footer/footer-mir.svg' alt='' />
							</div>
							<div className='footer__banks_item'>
								<img src='/icons/footer/footer-sbp.svg' alt='' />
							</div>
							<div className='footer__banks_item'>
								<img src='/icons/footer/footer-visa.svg' alt='' />
							</div>
							<div className='footer__banks_item'>
								<img src='/icons/footer/footer-mastercard.svg' alt='' />
							</div>
						</div>
					</div>
					<h4 className='footer__date_info'>© 2020-2023 ООО КЭТСБИ ФЭМИЛИ</h4>
				</div>
			</div>
		</div>
	)
}

export default Footer
