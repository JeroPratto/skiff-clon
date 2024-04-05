const getColumnsInformation = () => {
	const data = [
		{
			logo: '/PagesPrivacyFirst/security.svg',
			title: 'Security',
			people: '3',
			profileImages: ['/faces/0x60.svg', '/faces/lella.svg'],
			access: 'Inivite-only',
		},
		{
			logo: '/PagesPrivacyFirst/design.svg',
			title: 'Design R&D',
			people: '8',
			profileImages: ['/faces/nightwatch.svg', '/faces/jason-sunny.svg'],
			access: 'Inivite-only',
		},
		{
			logo: '/PagesPrivacyFirst/recruiting.svg',
			title: 'Recruiting',
			people: '12',
			profileImages: ['/faces/tony.svg', '/faces/angelina.svg'],
			access: 'Everyone',
		},
		{
			logo: '/PagesPrivacyFirst/gtm.svg',
			title: 'GTM',
			people: '12',
			profileImages: ['/faces/jason.svg', '/faces/florence.svg'],
			access: 'Everyone',
		},
	]
	return data
}
export default getColumnsInformation
