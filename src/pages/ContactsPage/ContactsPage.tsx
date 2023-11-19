import Navigation from '../../components/blocks/Navigation/Navigation'
import Social from '../../components/blocks/Block-Social/Social'
import Footer from '../../components/blocks/Footer/Footer'

const ContactsPage = () => {
	return (
		<div>
			<Navigation />
			<div className='contact-page'>
				<div className='block-container'>
					<div className='contact-page__box'>
						<h3 className='page-title'>КОНТАКТЫ</h3>
						<div className='contact__items'>
							<div className='contact__items_item'>
								<h4 className='contact__item_title'>Офис и производство: </h4>
								<p className='contact__item_text'>
									194044, Санкт-Петербург, Большой Сампсониевский проспект, 60Р
								</p>
							</div>
							<div className='contact__items_item'>
								<h4 className='contact__item_title'>Офис и производство: </h4>
								<p className='contact__item_text'>
									194044, Санкт-Петербург, Большой Сампсониевский проспект, 60Р
								</p>
							</div>
							<div className='contact__item_img'>
								<img
									src='https://catsby-family.ru/assets/_image/Map.jpg'
									alt=''
								/>
								<p className='contact__img_description'>Карта проезда</p>
							</div>
						</div>
						<div className='contact__props'>
							<h3 className='contact__props_title'>Реквизиты</h3>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
							<h4 className='contact__props_subtitle'>
								Банк АО "ТИНЬКОФФ БАНК"
							</h4>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
							<h4 className='contact__props_subtitle'>
								Банк АО "ТИНЬКОФФ БАНК"
							</h4>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
							<p className='contact__props_text'>ООО «КЭТСБИ ФЭМИЛИ»</p>
						</div>
						<div className='contact__vacancies'>
							<h3 className='contact__vacancies_title'>Вакансии</h3>
							<p className='contact__vacancies_text'>
								Вакансии опубликованы на{' '}
								<a target='_blank' href='https://spb.hh.ru/employer/4840210'>
									HeadHunter
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Social />
			<Footer />
		</div>
	)
}

export default ContactsPage
