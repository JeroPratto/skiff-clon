interface SidebarButtons {
	nav: { icon: string; name: string }[]
	maiList: { icon: string; name: string }[]
}
export const getSidebarButtons = (): SidebarButtons => {
	const data: SidebarButtons = {
		nav: [
			{ icon: '/icons/search-icon.svg', name: 'Search' },
			{ icon: '/icons/settings-icon.svg', name: 'Settings' },
		],
		maiList: [
			{ icon: '/icons/sent-icon.svg', name: 'Sent' },
			{ icon: '/icons/send-later-icon.svg', name: 'Send later' },
			{ icon: '/icons/draft-icon.svg', name: 'Draft' },
			{ icon: '/icons/spam-icon.svg', name: 'Spam' },
			{ icon: '/icons/archive-icon.svg', name: 'Archive' },
			{ icon: '/icons/trash-icon.svg', name: 'Trash' },
		],
	}
	return data
}
