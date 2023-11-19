import { MaterialArrayItem } from './../ComplexTypes/types'
export interface CombinationInitialState {
	materialArray: MaterialArrayItem[]
	cabelArray: MaterialArrayItem[]
	activeMaterial: string
	activeCabel: string
	combinationArray: CombinationArrayItem[]
}

export interface CombinationArrayItem {
	materialTitle: string
	cabelTitle: string
	material: string
	cabel: string
	src: string
	id: string
}
