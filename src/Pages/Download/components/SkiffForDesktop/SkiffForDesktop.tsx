import React from 'react'
import styles from './SkiffForDesktop.module.css'
import windows from '/icons/windows.svg'
import desktop from '/download/skiff-desktop.webp'
export type SkiffForDesktopProps = {
	// types...
}

const SkiffForDesktop: React.FC<SkiffForDesktopProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.titleAndDesc}>
					<h2 className={styles.titleSection}>Skiff for Desktop</h2>
					<p className={styles.desc}>
						Work securely across Mail, Pages, Calendar, and Drive in the macOS
						and Windows desktop apps.
					</p>
				</div>
				<button className={styles.windows}>
					<img src={windows} alt='' /> Download
				</button>
			</div>
			<div className={styles.card}>
				<img src={desktop} alt='' />
			</div>
		</div>
	)
}

export default SkiffForDesktop
