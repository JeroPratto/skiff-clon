import styles from './DriveHero.module.css'
import sidebarStyles from '@/Pages/Mail/components/MailHero.module.css'
import check from '/mail/no-check-logo.svg'
import shield from '/icons/shield.svg'
import { getSidebarButtonsPages } from '@/Pages/Pages/utils/getSidebarButtonsPages'
import getDriveHeroFiles from '../utils/getDriveHeroFiles'
import { getDay } from '../utils/getDay'

export const DriveHero: React.FC = () => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.main}>
				<div className={styles.header}>
					<p className={styles.nav}>
						Design
						<img src={shield} alt='' className={styles.shield} />
					</p>
					<div className={styles.publishAndUpload}>
						<p className={styles.publish}>Publish</p>
						<p className={styles.upload}>Upload</p>
					</div>
				</div>
				<Table />
			</div>
		</div>
	)
}

const Sidebar = () => {
	const sidebar = getSidebarButtonsPages()
	return (
		<div className={sidebarStyles.sidebar}>
			<div className={sidebarStyles.logoAndTitle}>
				<img src='/header/drive-logo.svg' alt='' />
				<p className={sidebarStyles.title}>
					Skiff Drive <span>Nightwatch</span>
				</p>
			</div>
			<ul className={sidebarStyles.navbar}>
				<li className={`${sidebarStyles.item} ${sidebarStyles.active}`}>
					<div className={sidebarStyles.iconContainer}>
						<img src='/icons/compose-icon.svg' alt='' />
					</div>
					Upload
				</li>
				{sidebar.nav.map((nav, index) => (
					<li className={sidebarStyles.item} key={index}>
						<div className={sidebarStyles.iconContainer}>
							<img src={nav.icon} alt='' />
						</div>
						{nav.name}
					</li>
				))}
			</ul>

			<ul className={sidebarStyles.DriveList}>
				<li className={sidebarStyles.mailListTitle}>GENERAL</li>
				{sidebar.maiList.map((item, itemIndex) => (
					<li
						className={`${sidebarStyles.item} ${itemIndex === 2 ? sidebarStyles.hover : ''}`}
						key={itemIndex}
					>
						<div className={sidebarStyles.iconContainer}>
							<img src={item.icon} alt='' />
						</div>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	)
}

const Table = () => {
	const items = getDriveHeroFiles()
	const day = getDay()
	return (
		<div className={styles.table}>
			<div className={styles.tableHeader}>
				<p className={styles.nameHeader}>
					<img src={check} alt='' /> Name
				</p>
				<div className={styles.information}>
					<p className={styles.type}>Type</p>
					<p className={styles.size}>Size</p>
					<p className={styles.last}>Last modified</p>
				</div>
			</div>
			{items.map((item, index) => (
				<div className={styles.item} key={index}>
					<div className={styles.nameContainer}>
						<img src={check} alt='' />
						<div className={styles.logo}>
							<img src={item.logo} alt='' />
						</div>
						<p>{item.name}</p>
					</div>
					<div className={styles.information}>
						<div className={styles.typeText}>
							{item.type && <p>{item.type}</p>}
						</div>
						<div className={styles.sizeText}>
							<p>{item.size}</p>
						</div>
						<div className={styles.lastText}>
							<p>{day}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
