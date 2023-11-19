import React from 'react'

const Elements: React.FC = () => {
	return (
		<div className='elements'>
			<div className='block-container'>
				<div className='elements__box'>
					<div className='elements__content'>
						<div className='elements__content_item'>
							<h3 className='elements__content_title'>Мягкие коврики</h3>
							<h4 className='elements__content_text'>
								Во время отталкивания и приземления коврики предотвращают
								соскальзывание и подворачивание лап.
							</h4>
							<h4 className='elements__content_text'>
								Благодаря зацепу для задних лап, кошки с большим удовольствием и
								с большей силой точат когти передних лапок.
							</h4>
						</div>

						<div className='elements__content_item'>
							<h3 className='elements__content_title'>Большие полки</h3>
							<h4 className='elements__content_text'>
								Полки вырезаны из 20-мм дуба - сверх крепкие и надёжные
							</h4>
							<h4 className='elements__content_text'>
								Спокойно выдержат несколько резвящихся питомцев, прыгающих с
								полки на полку.
							</h4>
						</div>
					</div>
					<div className='elements__imgs'>
						<div className='elements__imgs_rug'>
							<img src='/pictures/elements/carpet.png' alt='' />
						</div>

						<div className='elements__imgs_shelf'>
							<img src='/pictures/elements/shelf.png' alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Elements
