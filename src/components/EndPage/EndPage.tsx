import React from 'react'
import styles from './EndPage.module.css'
import arrow from '/home/arrow-orange.svg'

export type EndPageProps = {
	desc: string
	urlImage: string
}

const EndPage: React.FC<EndPageProps> = ({ desc, urlImage }) => {
	return (
		<div className={styles.container}>
			<div className={styles.information}>
				<p className={styles.title}>Download Skiff for mobile</p>
				<p className={styles.desc}>{desc}</p>
				<a href='#' className={styles.download}>
					Download app <img src={arrow} alt='' />
				</a>
			</div>
			<div className={styles.imageContainer}>
				<img src={urlImage} alt='' data-testid='example-image' />
			</div>
		</div>
	)
}

export default EndPage
