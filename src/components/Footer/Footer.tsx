import React from 'react'
import styles from './Footer.module.css'
import { getFooterLists } from './utils/getFooterLists'
import logo from '/footer/logo.svg'
import useIsView from '../utils/useIsView'

const Footer: React.FC = () => {
	const lists = getFooterLists()
	const isView = useIsView()

	return (
		isView && (
			<footer className={styles.footer}>
				<div className={styles.logoAndCopy}>
					<img src={logo} alt='' className={styles.logo} />
					<p className={styles.copy}>© 2024. All rights reserved.</p>
				</div>
				<div className={styles.lists}>
					{lists.map((list, index) => (
						<ul className={styles.list} key={index}>
							<li className={styles.title}>{list.title}</li>
							{list.list.map((item, indexItem) => (
								<li className={styles.item} key={indexItem}>
									{item}
								</li>
							))}
						</ul>
					))}
				</div>
			</footer>
		)
	)
}

export default Footer
