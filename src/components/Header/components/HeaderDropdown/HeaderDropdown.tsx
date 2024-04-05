import React from 'react'
import styles from './HeaderDropDown.module.css'
import arrow from '/header/arrow-mini.svg'
import {
	getHeaderProductsItems,
	getHeaderResourcesItems,
} from '../HeaderMenu/utils/getHeaderMenuItems'
import { Link } from 'react-router-dom'

export const HeaderDropdownProducts: React.FC = () => {
	const items = getHeaderProductsItems()
	return (
		<div className={styles.container}>
			<p className={styles.openMenu}>
				Product
				<img src={arrow} alt='' />
			</p>
			<ul className={styles.dropdown}>
				<div className={styles.invisible}></div>
				{items.items.map((item, index) => (
					<li key={index}>
						<Link to={item.href} className={styles.itemProduct}>
							<img
								src={item.urlImage}
								alt={item.title}
								className={styles.imageProduct}
							/>
							<p className={styles.titleAndDesc}>
								<span className={styles.titleProduct}>{item.title}</span>
								<span className={styles.descProduct}>{item.desc}</span>
							</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export const HeaderDropdownResources: React.FC = () => {
	const items = getHeaderResourcesItems()
	return (
		<div className={styles.container}>
			<p className={styles.openMenu}>
				Resources
				<img src={arrow} alt='' />
			</p>
			<ul className={styles.dropdown}>
				<div className={styles.invisible}></div>
				{items.items.map((item, index) => (
					<li className={styles.itemResouces} key={index}>
						<img
							src={item.urlImage}
							alt={item.desc}
							className={styles.imageProduct}
						/>
						<p className={styles.titleResources}>{item.desc}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
