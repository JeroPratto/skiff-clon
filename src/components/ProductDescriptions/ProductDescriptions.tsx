import React from 'react'
import styles from './ProductDescriptions.module.css'

export type ProductDescriptionsProps = {
	items: { title: string; desc: string }[]
}

const ProductDescriptions: React.FC<ProductDescriptionsProps> = ({ items }) => {
	return (
		<ul className={styles.container}>
			{items.map((item, index) => (
				<li className={styles.item} key={index}>
					<p className={styles.title}>{item.title}</p>
					<p className={styles.desc}>{item.desc}</p>
				</li>
			))}
		</ul>
	)
}

export default ProductDescriptions
