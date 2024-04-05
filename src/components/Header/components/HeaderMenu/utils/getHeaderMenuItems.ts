export const getHeaderProductsItems = () => {
	const data = {
		title: 'Product',
		items: [
			{
				title: 'Mail',
				urlImage: '/header/email-logo.svg',
				desc: 'Encrypted email',
				href: '/mail',
			},
			{
				title: 'Pages',
				urlImage: '/header/pages-logo.svg',
				desc: 'Private docs, notes, wikis',
				href: '/pages',
			},
			{
				title: 'Drive',
				urlImage: '/header/drive-logo.svg',
				desc: 'Secure file storage',
				href: '/drive',
			},
		],
	}
	return data
}

export const getHeaderResourcesItems = () => {
	const data = {
		title: 'Resources',
		items: [
			{ urlImage: '/header/open-logo.svg', desc: 'Open' },
			{ urlImage: '/header/whitepaper-logo.svg', desc: 'Whitepaper' },
			{ urlImage: '/header/privacy-logo.svg', desc: 'Privacy' },
			{ urlImage: '/header/changelog-logo.svg', desc: 'Changelog' },
			{ urlImage: '/header/help-logo.svg', desc: 'Help' },
		],
	}
	return data
}
