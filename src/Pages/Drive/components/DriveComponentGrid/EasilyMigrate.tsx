import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'
import styles from './EasilyMigrate.module.css'
import googleDrive from '/icons/google-drive.svg'
import getDriveHeroFiles from '../../utils/getDriveHeroFiles'
import check from '/mail/no-check-logo.svg'

const EasilyMigrate: React.FC = () => {
	const items = getDriveHeroFiles()
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='Easily migrate with 1-click'
				desc='Easily migrate files from Google Drive by selecting the folders and files you want in our one-click migration tool.'
			/>
			<div className={styles.container}>
				<Left />
				<div className={styles.right}>
					<p className={styles.search}>Search</p>
					{items.map((item, index) => (
						<div className={styles.item} key={index}>
							<img src={check} alt='' className={styles.check} />
							<div className={styles.logo}>
								<img src={item.logo} alt='' />
							</div>
							<p>{item.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default EasilyMigrate

const Left = () => {
	return (
		<div className={styles.left}>
			<div className={styles.driveAndGmail}>
				<img src={googleDrive} alt='' />
				<p className={styles.textAndSub}>
					larry@gmail.com <span>Switch account</span>
				</p>
			</div>
			<div className={styles.titleAndDesc}>
				<p className={styles.title}>Import from Google Drive</p>
				<p className={styles.desc}>
					Skiff never has acces to your text files, even when importing from
					Google.
				</p>
			</div>
			<div className={styles.skiffDrive}>
				<img src='/header/drive-logo.svg' alt='' />
				<p className={styles.textAndSub}>
					Skiff Drive <span>4 items to be imported</span>
				</p>
			</div>
		</div>
	)
}
