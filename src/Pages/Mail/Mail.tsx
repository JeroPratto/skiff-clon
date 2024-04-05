import React from 'react'
import styles from '../styles/PagesContainer.module.css'
import { getMailHeroProduct } from '../utils/getHeroProductsInformation'
import MailHero from './components/MailHero'
import { HeroProducts } from '@/components/HeroProducts'
import { TitleAndComponentGrid } from '@/components/TitleAndComponentGrid'
import { AddOrRegisterDomain } from './components/MailComponentGrid/AddOrRegisterDomain'
import { EndToEnd } from './components/MailComponentGrid/EndToEnd'
import { UnlimitedAliases } from './components/MailComponentGrid/UnlimitedAliases'
import { ProtectEmailTracking } from './components/MailComponentGrid/ProtectEmailTracking'
import getMailProductsDescriptions from './utils/getMailProductsDescriptions'
import { ProductDescriptions } from '@/components/ProductDescriptions'
import { EndPage } from '@/components/EndPage'

const Mail: React.FC = () => {
	const information = getMailHeroProduct()
	const title = (
		<>
			Skiff Mail is{' '}
			<span style={{ color: '#4ab7ee' }}>end-to-end encrypted</span> email that
			protects your inbox and gives you the power to{' '}
			<span style={{ color: '#4ab7ee' }}>communicate freely</span>.
		</>
	)
	const productsDesc = getMailProductsDescriptions()
	return (
		<div className={styles.container}>
			<HeroProducts information={information}>
				<MailHero />
			</HeroProducts>
			<TitleAndComponentGrid title={title}>
				<>
					<AddOrRegisterDomain />
					<EndToEnd />
					<UnlimitedAliases />
					<ProtectEmailTracking />
				</>
			</TitleAndComponentGrid>
			<ProductDescriptions items={productsDesc} />
			<EndPage
				desc='Want to access your information on the go? Skiff offers privacy-first collaboration directly on your iOS and Android devices.'
				urlImage='/endPages/mail.webp'
			/>
		</div>
	)
}

export default Mail
