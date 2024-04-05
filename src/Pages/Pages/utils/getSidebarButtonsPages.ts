interface SidebarButtons {
	nav: { icon: string; name: string }[]
	maiList: { icon: string; name: string }[]
}
export const getSidebarButtonsPages = (): SidebarButtons => {
	const data: SidebarButtons = {
		nav: [
			{ icon: '/icons/search-icon.svg', name: 'Search' },
			{ icon: '/icons/settings-icon.svg', name: 'Settings' },
		],
		maiList: [
			{ icon: '/icons/q1-overview.svg', name: 'Q1 overview' },
			{ icon: '/icons/team-review.svg', name: 'Team review' },
			{ icon: '/icons/design-icon.svg', name: 'Design' },
			{ icon: '/icons/settings-icon.svg', name: 'Meeting' },
		],
	}
	return data
}
