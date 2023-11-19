import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../redux/reduxHooks/hooks'

const AnswerItems = () => {
	const answerArray = useAppSelector((state) => state.answer.answersArray)
	return (
		<div className='answer__items'>
			<div className='block-container'>
				<div className='answer__items_box'>
					<h3 className='page-title'>ВОПРОСЫ И ОТВЕТЫ</h3>
					<div className='answer__items_content'>
						{answerArray.map((item) => {
							return (
								<div key={item.id} className='answer__content_item'>
									<Link
										to={`/answers/${item.id}`}
										className='answer__item_title'>
										{item.title}
									</Link>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AnswerItems
