import React, { ReactNode } from 'react'
import styles from './ProductGridComponent.module.css'
import CardTitleAndDesc from '../CardTitleAndDesc/CardTitleAndDesc'

interface ProductGridComponentProps {
	title: string
	desc: string
	children: ReactNode
}
const ProductGridComponent: React.FC<ProductGridComponentProps> = ({
	title,
	desc,
	children,
}) => {
	return (
		<div className={styles.container}>
			<CardTitleAndDesc title={title} desc={desc} />
			{children}
		</div>
	)
}

export default ProductGridComponent
