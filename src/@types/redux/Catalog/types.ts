import { MaterialItem } from './../../blocks/Complex/types'
import { ComplexArrayItem } from '../ComplexTypes/types'

export interface CatalogInitial {
	catalog: CatalogItemsitem[]
	activeCategories: string
	categoriesArray: CategoriesItem[]
	materialArray: MaterialItem[]
	cabelArray: MaterialItem[]
}

export interface CatalogItemsitem {
	items: ComplexArrayItem[]
	id: string
}

export interface CategoriesItem {
	content: string
	id: string
}
