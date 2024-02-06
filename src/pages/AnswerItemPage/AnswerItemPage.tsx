import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/reduxHooks/hooks'
import Navigation from '../../components/blocks/Navigation/Navigation'
import Footer from '../../components/blocks/Footer/Footer'
import Social from '../../components/blocks/Block-Social/Social'

const AnswerItemPage = () => {
	const { id } = useParams()
	const answerArray = useAppSelector((state) => state.answer.answersArray)
	const findItem = answerArray.find((item) => item.id == id)
	return (
		<div>
			<Navigation />
			<div className='answer-item'>
				<div className='block-container'>
					<div className='answer-item__box'>
						<Link to='/answers' className='answer-item__return'>
							Вопрос-ответ
						</Link>
						<h3 className='answer-item__title'>{findItem?.title}</h3>
						<p className='answer-item__text'>{findItem?.text}</p>
						<div className='answer-item__img'>
							<img src={findItem?.img} alt='' />
						</div>
					</div>
				</div>
			</div>
			<Social />
			<Footer />
		</div>
	)
}

export default AnswerItemPage
