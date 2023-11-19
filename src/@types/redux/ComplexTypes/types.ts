export interface ComplexInitialState {
	materialArray: MaterialArrayItem[]
	cabelArray: MaterialArrayItem[]

	activeMaterial: string
	activeCabel: string
}

export interface ComplexArrayItem {
	id: string
	cabel: string
	material: string
	cabelTitle: string
	materialTitle: string

	items: ComplexItemsItem[]
}

export interface ComplexItemsItem {
	itemId: string
	src: string
	price: number
	priceDiscount: number
	title: string
	characteristics: CharacteristicsItem[]
	count: number
	info: InfoItem
}

export interface MaterialArrayItem {
	id: string
	src: string
}
export interface CharacteristicsItem {
	title: string
	text: string
}
export interface InfoItem {
	src: string[]
	description: string[]
}
