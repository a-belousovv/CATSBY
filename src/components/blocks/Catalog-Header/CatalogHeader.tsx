import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks/hooks'
import { changeActiveCategories } from '../../../redux/slices/Catalog/CatalogSlice'

const CatalogHeader = () => {
	const dispatch = useAppDispatch()
	const activeCategory = useAppSelector(
		(state) => state.catalog.activeCategories
	)
	const categoriesArray = useAppSelector(
		(state) => state.catalog.categoriesArray
	)
	return (
		<div className='catalog__header'>
			<div className='block-container'>
				<div className='catalog__header_box'>
					<h3 className='catalog__header_title'>КАТАЛОГ</h3>
					<div className='catalog__header_categories'>
						{categoriesArray.map((item) => {
							return (
								<h4
									onClick={() => dispatch(changeActiveCategories(item.id))}
									key={item.id}
									className={`catalog__categories_item ${
										activeCategory == item.id ? 'active' : ''
									}`}>
									{item.content}
								</h4>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogHeader
