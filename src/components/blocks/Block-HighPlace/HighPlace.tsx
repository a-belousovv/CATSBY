import React from 'react'
import TitleOrange from '../../share/TitleOrange/TitleOrange'
import SubTitleGray from '../../share/SubTitleGray/SubTitleGray'
import TextGray from '../../share/TextGray/TextGray'

const HighPlace: React.FC = () => {
	return (
		<div className='high-place'>
			<div className='block-container'>
				<div className='high-place__box'>
					<div className='high-place__content'>
						<TitleOrange text='ПРОДУМАННО ПРОСТО' />
						<SubTitleGray text='Самое высокое место в доме' />
						<TextGray
							text='Кошки любят вы­со­ту, там тепло, безопасно, далеко от детей и
							собак. На самом верху когтеточки Catsby — домик из фильца. В этом
							домике ваш питомец будет как в небесном замке: ситуация в квартире
							под контролем, тыл прикрыт, враги где-то внизу.'
						/>
					</div>
					<div className='high-place__img'>
						<img src='/pictures/high-place/cat-on-house.jpg' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HighPlace
