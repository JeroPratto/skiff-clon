interface FooterList {
	title: string
	list: string[]
}
export const getFooterLists = () => {
	const data: FooterList[] = [
		{
			title: 'PRODUCTS',
			list: ['Mail', 'Pages', 'Drive', 'Calendar', 'Download'],
		},
		{
			title: 'RESOURCES',
			list: ['Help', 'Changelog'],
		},
		{
			title: 'DEVELOPER',
			list: [
				'GitHub',
				'Libraries',
				'Skiff Crypto docs',
				'Skiff UI docs',
				'Whitepaper',
				'Report an issue',
				'Status',
			],
		},
		{
			title: 'LEGAL',
			list: ['Privacy policy', 'Terms of service', 'Acceptable use policy'],
		},
	]
	return data
}
