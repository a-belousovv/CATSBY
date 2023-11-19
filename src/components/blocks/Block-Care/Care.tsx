import React from 'react'
import TitleOrange from '../../share/TitleOrange/TitleOrange'
import SubTitleGray from '../../share/SubTitleGray/SubTitleGray'
import TextGray from '../../share/TextGray/TextGray'

const Care: React.FC = () => {
	return (
		<div className='care'>
			<div className='block-container'>
				<div className='care__box'>
					<div className='care__content'>
						<TitleOrange text='ЕЩË БОЛЬШЕ ЗАБОТЫ' />
						<SubTitleGray text='Простота в уборке' />
						<TextGray text='Когтеточки Catsby занимают минимум места на полу. А некоторые и вовсе крепятся на стену, это экономит пространство, упрощает уборку для роботов пылесосов, бережёт мизинцы' />
					</div>
					<div className='care__img'>
						<img src='/pictures/care/care-img.jpg' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Care
