//IMPORT BLOCKS
import Care from '../../components/blocks/Block-Care/Care'
import Combination from '../../components/blocks/Block-Combination/Combination'
import Comments from '../../components/blocks/Block-Comments/Comments'
import Complex from '../../components/blocks/Block-Complex/Complex'

import Design from '../../components/blocks/Block-Design/Design'
import Gallery from '../../components/blocks/Block-Gallery/Gallery'
import HighPlace from '../../components/blocks/Block-HighPlace/HighPlace'
import Elements from '../../components/blocks/Block-House-Elements/Elements'
import Instruction from '../../components/blocks/Block-Instruction/Instruction'
import Magnetic from '../../components/blocks/Block-Magnetic/Magnetic'
import Photos from '../../components/blocks/Block-Photos/Photos'
import RunLine from '../../components/blocks/Block-RunLine/RunLine'
import Safely from '../../components/blocks/Block-Safely/Safely'
import Social from '../../components/blocks/Block-Social/Social'
import Module from '../../components/blocks/Block-module/Module'
import Footer from '../../components/blocks/Footer/Footer'
import Header from '../../components/blocks/Header/Header'
import Navigation from '../../components/blocks/Navigation/Navigation'

//IMPORT STYLES
import '/src/assets/styles/main-style/main.scss'
const MainPage = () => {
	return (
		<main>
			<Navigation />
			<Header />
			<Design />
			<Combination />
			<Photos />
			<RunLine />
			<HighPlace />
			<Module />
			<Elements />
			<Magnetic />
			<Gallery />
			<Comments />
			<Care />
			<Instruction />
			<Safely />
			<Complex />
			<Social />
			<Footer />
		</main>
	)
}

export default MainPage
