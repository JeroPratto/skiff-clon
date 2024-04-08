import React from 'react'
import styles from '../styles/PagesContainer.module.css'
import { getDriveHeroProduct } from '../utils/getHeroProductsInformation'
import { DriveHero } from './components/DriveHero'
import { HeroProducts } from '@/components/HeroProducts'
import { TitleAndComponentGrid } from '@/components/TitleAndComponentGrid'
import { ProductDescriptions } from '@/components/ProductDescriptions'
import { EndPage } from '@/components/EndPage'
import getDriveProductDescriptions from './utils/getDriveProductDescriptions'
import UploadSharePreview from './components/DriveComponentGrid/UploadSharePreview'
import FreeStorage from './components/DriveComponentGrid/FreeStorage'
import DecentralizedIPFS from './components/DriveComponentGrid/DecentralizedIPFS'
import EasilyMigrate from './components/DriveComponentGrid/EasilyMigrate'

const Drive: React.FC = () => {
	const title = (
		<>
			Skiff Drive protects your files with
			<span style={{ color: 'rgb(0, 160, 94)' }}> end-to-end encryption</span>,
			so you can share your work
			<span style={{ color: 'rgb(0, 160, 94)' }}> securely</span>.
		</>
	)
	const information = getDriveHeroProduct()
	const productsDrive = getDriveProductDescriptions()
	return (
		<div className={styles.container}>
			<HeroProducts information={information}>
				<DriveHero />
			</HeroProducts>
			<TitleAndComponentGrid title={title}>
				<>
					<UploadSharePreview />
					<FreeStorage />
					<DecentralizedIPFS />
					<EasilyMigrate />
				</>
			</TitleAndComponentGrid>
			<ProductDescriptions items={productsDrive} />
			<EndPage
				desc='Need to upload, preview, or share files on the go? Download the Skiff Drive mobile apps for iOS or Android.'
				urlImage='/endPages/drive.webp'
			/>
		</div>
	)
}

export default Drive
