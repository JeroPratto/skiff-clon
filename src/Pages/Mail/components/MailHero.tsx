import styles from './MailHero.module.css'
import checkLogo from '/mail/check-logo.svg'
import noCheckLogo from '/mail/no-check-logo.svg'
import { MailPreviewInterface, getMails } from '../utils/getMails'
import composeIcon from '/icons/compose-icon.svg'
import inboxIcon from '/icons/inbox-icon.svg'
import { getSidebarButtons } from '../utils/getSidebarButtons'

const MailHero: React.FC = () => {
	const mails = getMails()

	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.mainContent}>
				<p className={styles.header}>
					Inbox <span>12</span>
				</p>
				<ul className={styles.mails}>
					<li className={styles.mailItem}>
						<div className={styles.userAndCheckContainer}>
							<img src={noCheckLogo} alt='' />
							<p className={styles.mostRecent}>Most recent</p>
						</div>
					</li>
					{mails.map((mail, index) => (
						<MailPreview {...mail} key={index} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default MailHero

const MailPreview: React.FC<MailPreviewInterface> = ({
	view,
	check,
	face,
	name,
	subject,
	advance,
}) => {
	return (
		<li className={styles.mailItem}>
			<div className={styles.userAndCheckContainer}>
				<img
					src={check ? checkLogo : noCheckLogo}
					alt=''
					className={styles.check}
				/>
				<img src={face} alt='' className={styles.face} />
				<p className={styles.name}>{name}</p>
			</div>
			<p className={`${styles.subject} ${view ? '' : styles.notView}`}>
				{!view && <div className={styles.orangeCircle}></div>}
				{subject} - <span className={styles.advance}>{advance}</span>
			</p>
		</li>
	)
}

const Sidebar = () => {
	const sidebar = getSidebarButtons()
	return (
		<div className={styles.sidebar}>
			<div className={styles.logoAndTitle}>
				<img src='/header/email-logo.svg' alt='' />
				<p className={styles.title}>
					Skiff Mail <span>Night watch</span>
				</p>
			</div>
			<ul className={styles.navbar}>
				<li className={`${styles.item} ${styles.active}`}>
					<div className={styles.iconContainer}>
						<img src={composeIcon} alt='' />
					</div>
					Compose
				</li>
				{sidebar.nav.map((nav, index) => (
					<li className={styles.item} key={index}>
						<div className={styles.iconContainer}>
							<img src={nav.icon} alt='' />
						</div>
						{nav.name}
					</li>
				))}
			</ul>

			<ul className={styles.mailList}>
				<li className={styles.mailListTitle}>MAIL</li>
				<li className={`${styles.item} ${styles.hover}`}>
					<div className={styles.iconContainer}>
						<img src={inboxIcon} alt='' />
					</div>
					Inbox
				</li>
				{sidebar.maiList.map((item, itemIndex) => (
					<li className={styles.item} key={itemIndex}>
						<div className={styles.iconContainer}>
							<img src={item.icon} alt='' />
						</div>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	)
}
