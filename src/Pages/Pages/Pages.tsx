import React from 'react'
import styles from '../styles/PagesContainer.module.css'
import { getPageHeroProduct } from '../utils/getHeroProductsInformation'
import { HeroProducts } from '@/components/HeroProducts'
import { PagesHero } from './components/PagesHero'
import { EndPage } from '@/components/EndPage'
import { ProductDescriptions } from '@/components/ProductDescriptions'
import getPagesProductsDescriptions from './utils/getPagesProductsDescriptions'
import { TitleAndComponentGrid } from '@/components/TitleAndComponentGrid'
import PrivacyFirst from './components/PagesComponentsGrid/PrivacyFirst'
import ManageTeamsWorkspace from './components/PagesComponentsGrid/ManageTeamsWorkspace'
import RealTimeCollaboration from './components/PagesComponentsGrid/RealTimeCollaboration'
import StealthOrShare from './components/PagesComponentsGrid/StealthOrShare'

const Pages: React.FC = () => {
	const information = getPageHeroProduct()
	const productsPage = getPagesProductsDescriptions()
	const title = (
		<>
			Take your
			<span style={{ color: 'rgb(239, 90, 60)' }}> thoughts</span> and{' '}
			<span style={{ color: 'rgb(239, 90, 60)' }}>ideas</span> to the next level
			with a private, end-to-end encrypted workspace.
		</>
	)
	return (
		<div className={styles.container}>
			<HeroProducts information={information}>
				<PagesHero />
			</HeroProducts>
			<TitleAndComponentGrid title={title}>
				<>
					<PrivacyFirst />
					<ManageTeamsWorkspace />
					<RealTimeCollaboration />
					<StealthOrShare />
				</>
			</TitleAndComponentGrid>
			<ProductDescriptions items={productsPage} />
			<EndPage
				desc='Want to access your information on the go? Skiff Pages on mobile offers privacy-first writing and real-time collaboration directly on your iOS and Android devices.'
				urlImage='/endPages/pages.webp'
			/>
		</div>
	)
}

export default Pages
