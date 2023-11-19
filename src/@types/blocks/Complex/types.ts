export interface MaterialItem {
	id: number
	src: string
}
export interface ComplexItem {
	id: number
	src: string
	price: string
	priceDiscount: string
	payment: string
	info: string
}
export interface ComplexArrayItem {
	id: number
	cabel: number
	material: number
	items: ComplexItem[]
}
