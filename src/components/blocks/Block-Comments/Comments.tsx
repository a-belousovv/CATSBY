import React, { useEffect, useState } from 'react'

const Comments: React.FC = () => {
	const [windowScroll, setWindowScroll] = useState(0)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setWindowScroll(window.scrollY)
		})
	}, [window.scrollY])
	return (
		<div className='comments'>
			<div className='block-container'>
				<div className='comments__box'>
					<div className='comments__items'>
						<div className='comments__items_item '>
							<img
								src='/pictures/comments/comments-people-1.jpg'
								alt=''
								className='comments__item_img'
							/>
							<div className='comments__item_content'>
								<h3 className='comments__content_title'>
									Это восторг, это супер качество! Всё продумано, господи это
									прямо не описать словами!😍☺
								</h3>
							</div>
						</div>
						<div className='comments__items_item '>
							<img
								src='/pictures/comments/comments-people-1.jpg'
								alt=''
								className='comments__item_img'
							/>
							<div className='comments__item_content'>
								<h3 className='comments__content_title'>
									Я безмерно счастлива сегодня! Очень качественно, добротно
									сделано. От дерева и каната приятный запах, никакой "химозы".
									Хоть сама лезь, так клёво!!!!
								</h3>
							</div>
						</div>
						<div className='comments__items_item '>
							<img
								src='/pictures/comments/comments-people-1.jpg'
								alt=''
								className='comments__item_img'
							/>
							<div className='comments__item_content'>
								<h3 className='comments__content_title'>
									Приятно трогать и смотреть! Рай перфекциониста просто!
									Выглядит сверх эстетично! И нет убогого ковролина, как у
									когтеточек и домиков других производителей. Денег своих стоит
									однозначно!!
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Comments
