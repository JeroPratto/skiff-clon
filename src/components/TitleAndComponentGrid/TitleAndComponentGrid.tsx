import React, { ReactNode } from 'react'
import styles from './TitleAndComponentGrid.module.css'

export type TitleAndComponentGridProps = {
	title: ReactNode
	children: ReactNode
}

const TitleAndComponentGrid: React.FC<TitleAndComponentGridProps> = ({
	title,
	children,
}) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.gridContainer}>{children}</div>
		</div>
	)
}

export default TitleAndComponentGrid
