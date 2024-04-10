import React from 'react'
import styles from './SkiffFormMobile.module.css'

export type SkiffForMobileProps = {
	// types...
}

const SkiffForMobile: React.FC<SkiffForMobileProps> = ({}) => {
	const cards = getCards()
	return (
		<div className={styles.container}>
			<h2 className={styles.titleSection}>Skiff for Mobile</h2>
			<div className={styles.cards}>
				{cards.map((card, index) => (
					<div className={styles.card} key={index}>
						<div className={styles.header}>
							<div className={styles.logoAndTitle}>
								<img src={card.logo} alt='' />
								<p style={{ color: card.color }}>{card.title}</p>
							</div>
							<p className={styles.desc}>{card.desc}</p>
						</div>
						<button className={styles.downloadButton}>Download</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default SkiffForMobile

const getCards = () => {
	const cards = [
		{
			logo: '/header/email-logo.svg',
			title: 'Mail',
			desc: 'Protect your inbox with end-to-end encrypted email.',
			color: 'rgb(11, 121, 175)',
		},
		{
			logo: '/header/pages-logo.svg',
			title: 'Pages',
			desc: 'Take your ideas to the next level with privacy-first notes, wikis, and docs.',
			color: 'rgb(239, 90, 60)',
		},
		{
			logo: '/header/drive-logo.svg',
			title: 'Drive',
			desc: 'Keep your files, images, and data secure.',
			color: 'rgb(0, 160, 94)',
		},
		{
			logo: '/header/calendar-logo.svg',
			title: 'Cal',
			desc: 'Keep your schedule end-to-end encrypted.',
			color: 'rgb(175, 88, 131)',
		},
	]
	return cards
}
