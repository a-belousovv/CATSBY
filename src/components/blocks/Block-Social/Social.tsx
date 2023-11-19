import React from 'react'
import TitleGray from '../../share/TitleCardsBgGray/TitleGray'

const Social: React.FC = () => {
	return (
		<div className='social'>
			<div className='block-container'>
				<div className='social__box'>
					<div className='social__content'>
						<TitleGray text='Подписывайтесь на наши социальные сети' />
						<p className='social__content_text'>
							Следите за акциями и конкурсами с крутыми подарками
						</p>
						<div className='social__content_buttons'>
							<button className='social__buttons_button'>Вконтакте</button>
							<button className='social__buttons_button'>Телеграм</button>
						</div>
					</div>
					<div className='social__img'>
						<img src='/pictures/social/social.png' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Social
