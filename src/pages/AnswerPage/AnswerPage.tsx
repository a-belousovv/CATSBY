import Navigation from '../../components/blocks/Navigation/Navigation'
import Footer from '../../components/blocks/Footer/Footer'
import Social from '../../components/blocks/Block-Social/Social'
import AnswerItems from '../../components/blocks/Answer-Items/AnswerItems'

const AnswerPage = () => {
	return (
		<div className='answer-page'>
			<Navigation />
			<AnswerItems />
			<Social />
			<Footer />
		</div>
	)
}

export default AnswerPage
