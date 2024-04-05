import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'
import styles from '../DriveHero.module.css'
import check from '/mail/no-check-logo.svg'
import getDriveHeroFiles from '../../utils/getDriveHeroFiles'

const UploadSharePreview: React.FC = () => {
	const items = getDriveHeroFiles()
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='Upload, share, and preview any file'
				desc='On Skiff Drive, you can upload and share any file type or entire folders. Preview files, images, and video on the web and mobile apps.'
			/>
			<div className={styles.containerUploadSharePreview}>
				<div className={styles.tableHeader}>
					<p className={styles.nameHeader}>
						<img src={check} alt='' />
						Name
					</p>
					<div className={styles.information}>
						<p className={styles.type}>Type</p>
						<p className={styles.size}>Size</p>
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
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default UploadSharePreview
