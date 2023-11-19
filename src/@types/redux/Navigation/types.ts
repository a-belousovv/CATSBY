export interface NavigationInitial {
	isBurger: boolean
	navigationItems: NavigationItem[]
}

export interface NavigationItem {
	id: string
	content: string
}
