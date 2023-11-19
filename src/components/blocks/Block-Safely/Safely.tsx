import React from 'react'
import TextGray from '../../share/TextGray/TextGray'
import TitleGray from '../../share/TitleCardsBgGray/TitleGray'

const Safely: React.FC = () => {
	return (
		<div className='safely'>
			<div className='block-container'>
				<div className='safely__box'>
					<div className='safely__header'>
						<div className='safely__header_img'>
							<img src='/icons/safely/safely-icon.svg' alt='' />
							<h4 className='safely__img_title'>ECO-FRIENDLY</h4>
						</div>
						<TitleGray
							className='safely__header_title'
							text='Безопасно для природы и детей'
						/>
					</div>
					<div className='safely__content'>
						<TextGray
							className='safely__content_text'
							text='Мы используем полностью био­раз­лагаемую упаковку. Когтеточку изготавливаем из натуральных материалов. Канат плетём из органического хлопка без пропиток и полиэстеровых микроволокон, наматываем без использования клея. Дуб покрываем «дышащими» растительными маслами и твёрдым воском.'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Safely
