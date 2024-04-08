import styles from './ProtectEmailTracking.module.css'
import tracking from '/mail/email-tracking.svg'
import face from '/faces/face-icon-blur-green.svg'
import face1 from '/faces/face-icon-blur-mix.svg'
import ProductGridComponent from '@/components/ProductGridComponent/ProductGridComponent'
export const ProtectEmailTracking = () => {
	return (
		<ProductGridComponent
			title='Protect yourself from email tracking'
			desc='Block trackers, opens, and more. Your device information and IP
		address are hidden by default when opening emails.'
		>
			<Protect />
		</ProductGridComponent>
	)
}

const Protect = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<img src={tracking} alt='' />
			</div>
			<div className={styles.right}>
				<div className={styles.information}>
					<div className={styles.header}>
						<div className={styles.icon}>P</div>
						<div className={styles.nameAndData}>
							<p className={styles.name}>Penelope Elope</p>
							<p className={styles.data}>
								<span>sweetpea@skiff.com</span>
								<span>To: jacksteadman@skiff.com</span>
								<span>Subject: Referral</span>
							</p>
						</div>
					</div>
					<div className={styles.faces}>
						<img src={face} alt='' />
						<img src={face1} alt='' />
						<p>+1</p>
					</div>
					<p className={styles.message}>
						Hey,
						<br />
						<br />
						After touching base with Laura, we decided that we should build this
						in Q1 instead of immediately. We’ll reflect this change in the
						standup meeting tomorrow morning and reprioritize accordingly. Jason
					</p>
				</div>
			</div>
		</div>
	)
}
