import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks/hooks'
import {
	changeCatalogActiveCabel,
	changeCatalogActiveMaterial,
} from '../../../redux/slices/Catalog/CatalogSlice'

const CatalogItems = () => {
	const catalog = useAppSelector((state) => state.catalog.catalog)

	const dispatch = useAppDispatch()

	const activeMaterial = useAppSelector((state) => state.catalog.activeMaterial)
	const activeCabel = useAppSelector((state) => state.catalog.activeCabel)

	const materialArray = useAppSelector((state) => state.catalog.materialArray)
	const cabelArray = useAppSelector((state) => state.catalog.cabelArray)

	const activeCategory = useAppSelector(
		(state) => state.catalog.activeCategories
	)

	const activeArray = catalog.find((item) => item.id == activeCategory)

	if (activeArray) {
		const findArray = activeArray.items.find(
			(item) => item.cabel == activeCabel && item.material == activeMaterial
		)
		if (findArray) {
			return (
				<div className='catalog__items'>
					<div className='block-container'>
						<div className='catalog__items_box'>
							<div className='catalog__items_header'>
								<div className='catalog__header_item'>
									<h4 className='catalog__item_title'>Натуральный дуб</h4>
									<div className='catalog__item_colors'>
										{materialArray.map((item) => {
											return (
												<div
													onClick={() =>
														dispatch(changeCatalogActiveMaterial(item.id))
													}
													key={item.id}
													className={`catalog__colors_item ${
														activeMaterial == item.id ? 'active' : ''
													}`}>
													<img src={item.src} alt='' />
												</div>
											)
										})}
									</div>
								</div>
								<div className='catalog__header_item'>
									<h4 className='catalog__item_title'>Белый канат</h4>
									<div className='catalog__item_colors'>
										{cabelArray.map((item) => {
											return (
												<div
													onClick={() =>
														dispatch(changeCatalogActiveCabel(item.id))
													}
													key={item.id}
													className={`catalog__colors_item ${
														activeCabel == item.id ? 'active' : ''
													}`}>
													<img src={item.src} alt='' />
												</div>
											)
										})}
									</div>
								</div>
							</div>
							<div className='catalog__items_content'>
								{findArray.items.map((item) => {
									return (
										<Link
											to={`/${activeArray.id}/${findArray.id}/${item.itemId}`}
											key={item.itemId}
											className='catalog__content_item'>
											<div className='catalog__item_img'>
												<img src={item.src} alt='' />
											</div>
											<div className='catalog__item_content'>
												<div className='catalog__content_header'>
													<h3 className='catalog__header_title'>
														{item.price}
													</h3>
													<h3 className='catalog__header_title discount'>
														{item.priceDiscount}
													</h3>
												</div>
												<div className='catalog__content_info'>
													<p className='catalog__info_text'>{item.title}</p>
												</div>
											</div>
										</Link>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default CatalogItems
