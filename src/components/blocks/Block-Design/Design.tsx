import React from 'react'
import TitleOrange from '../../share/TitleOrange/TitleOrange'
import SubTitleGray from '../../share/SubTitleGray/SubTitleGray'
import TextGray from '../../share/TextGray/TextGray'

const Design: React.FC = () => {
	return (
		<div className='design'>
			<div className='block-container'>
				<div className='design__box'>
					<div className='design__content'>
						<TitleOrange text='ДИЗАЙН' />
						<SubTitleGray text='Предмет искусства в вашем доме' />
						<TextGray
							text='Строгий и лаконичный скандинавский стиль порадует вашего
							внутреннего эстета. Настоящий дуб, хлопковый канат,
							гипоаллергенный фетр соответствуют духу времени — экологично,
							натурально, долговечно.'
						/>
					</div>
					<div className='design__img'>
						<img src='/pictures/design/design-item.jpg' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Design
