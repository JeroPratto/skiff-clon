import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import styles from './EndToEnd.module.css'
import { getMailsGrid } from '../../utils/getMailsGrid'
import checkLogo from '/mail/check-logo.svg'
import noCheckLogo from '/mail/no-check-logo.svg'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'

export const EndToEnd = () => {
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='End-to-end encrypted emails'
				desc='All emails between Skiff users are end-to-end encrypted, including
				both subject and contents. External mail is encrypted with your keys
				on receipt, keeping it private.'
			/>
			<EndToEndItems />
			<div className={styles.blur}></div>
		</div>
	)
}

const EndToEndItems = () => {
	const mails = getMailsGrid()
	return (
		<ul className={styles.container}>
			{mails.map((mail, index) => (
				<li className={styles.mailItem} key={index}>
					<div className={styles.userAndCheckContainer}>
						<img
							src={mail.check ? checkLogo : noCheckLogo}
							alt=''
							className={styles.check}
						/>
						<img src={mail.face} alt='' className={styles.face} />
						<p className={styles.name}>{mail.name}</p>
					</div>
					<p className={`${styles.subject} ${mail.view ? '' : styles.notView}`}>
						{!mail.view && <div className={styles.orangeCircle}></div>}
						{mail.subject} -{' '}
						<span className={styles.advance}>{mail.advance}</span>
					</p>
				</li>
			))}
		</ul>
	)
}
