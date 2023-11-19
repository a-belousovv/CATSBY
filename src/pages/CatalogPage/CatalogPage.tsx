import CatalogHeader from '../../components/blocks/Catalog-Header/CatalogHeader'
import CatalogItems from '../../components/blocks/Catalog-Items/CatalogItems'
import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation'

const CatalogPage = () => {
	return (
		<div>
			<Navigation />
			<CatalogHeader />
			<CatalogItems />
			<Footer />
		</div>
	)
}

export default CatalogPage
