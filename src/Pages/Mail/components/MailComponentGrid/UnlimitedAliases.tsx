import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import styles from './UnlimitedAliases.module.css'
import minimize from '/icons/minimize.svg'
import close from '/icons/x-icon.svg'
import face from '/faces/0x60.svg'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'

export const UnlimitedAliases = () => {
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='Preserve your privacy with unlimited aliases'
				desc='Wanted to ask about an update on the most recent engineering design
				doc'
			/>
			<NewMessage />
		</div>
	)
}

const NewMessage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.title}>New message</p>
				<div className={styles.icons}>
					<img src={minimize} alt='' />
					<img src={close} alt='' />
				</div>
			</div>
			<div className={styles.form}>
				<p className={styles.to}>
					To{' '}
					<span>
						<img src={face} alt='' className={styles.face} /> Diff E. Hellmax{' '}
						<img src={close} alt='' className={styles.close} />
					</span>
				</p>
				<p className={styles.subjectAndFrom}>
					Subject <span>An update to engineering status</span>
				</p>
				<p className={styles.subjectAndFrom}>
					From <span>incognitjo@skiff.com</span>
				</p>
			</div>
			<p className={styles.message}>
				Hey Diff,
				<br />
				<br />
				Wanted to ask about an update on the most recent engineering design doc
			</p>
		</div>
	)
}
