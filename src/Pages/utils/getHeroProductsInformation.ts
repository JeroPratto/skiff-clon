export interface HeroProductInformation {
	name: string
	number: string
	logo: string
	desc: string
	bgColor: string
}

export const getMailHeroProduct = (): HeroProductInformation => {
	const data = {
		name: 'Mail',
		number: '01',
		logo: '/header/email-logo.svg',
		desc: 'Skiff Mail protects your inbox by keeping your messages end-to-end encrypted. That means that no one but you has access to your data.',
		bgColor: 'linear-gradient(rgb(81, 196, 254) 0%, rgb(49, 175, 238) 100%)',
	}
	return data
}

export const getPageHeroProduct = (): HeroProductInformation => {
	const data = {
		name: 'Pages',
		number: '02',
		logo: '/header/pages-logo.svg',
		desc: 'Protect your notes, documents, and wikis with Skiff Pages - end-to-end encrypted and fully collaborative.',
		bgColor: 'linear-gradient(180deg, #EF5A3C 0%, #ED4F2F 100%)',
	}
	return data
}

export const getDriveHeroProduct = (): HeroProductInformation => {
	const data = {
		name: 'Drive',
		number: '03',
		logo: '/header/drive-logo.svg',
		desc: 'Skiff Drive protects your files, documents, and photos with end-to-end encryption.',
		bgColor: 'linear-gradient(180deg, #0FBA5B 0%, #34AC80 100%)',
	}
	return data
}
