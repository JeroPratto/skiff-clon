import React, { ReactNode } from 'react'
import styles from './HeroProducts.module.css'
import { HeroProductInformation } from '@/Pages/utils/getHeroProductsInformation'

export type HeroProductsProps = {
	information: HeroProductInformation
	children: ReactNode
}

const HeroProducts: React.FC<HeroProductsProps> = ({
	information,
	children,
}) => {
	return (
		<div
			className={styles.container}
			style={{ background: information.bgColor }}
			data-testid='hero-product-container'
		>
			<div className={styles.header}>
				<p className={styles.name}>SKIFF {information.name}</p>
				<p className={styles.number}>{information.number}</p>
			</div>
			<div className={styles.titleAndDesc}>
				<h1 className={styles.title}>
					Private, End-to-End Encrypted
					<img src={information.logo} alt='' data-testid='hero-products-logo' />
					{information.name}
				</h1>
				<p className={styles.desc}>{information.desc}</p>
			</div>
			<div className={styles.containerExample}>{children}</div>
		</div>
	)
}

export default HeroProducts
