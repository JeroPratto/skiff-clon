import React from 'react'
import styles from './Download.module.css'
import windows from '/icons/windows.svg'
import { SkiffForMobile } from './components/SkiffForMobile'
import { SkiffForDesktop } from './components/SkiffForDesktop'

const Download: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleAndDesc}>
				<h1 className={styles.title}>Download Skiff apps</h1>
				<p className={styles.desc}>
					Skiff offers privacy-first Android, iOS, and macOS apps for your
					desktop and mobile devices.
				</p>
				<div className={styles.downloadButtons}>
					<button className={styles.windows}>
						<img src={windows} alt='' /> Download Windows
					</button>
					<button className={styles.mobile}>Download mobile</button>
				</div>
			</div>
			<SkiffForMobile />
			<SkiffForDesktop />
		</div>
	)
}

export default Download
