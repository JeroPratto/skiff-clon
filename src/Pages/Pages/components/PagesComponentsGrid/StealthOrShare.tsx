import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'
import styles from './StealthOrShare.module.css'
import face from '/faces/jason-sunny.svg'
const StealthOrShare: React.FC = () => {
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='Stay in stealth or share with the world'
				desc='Control exactly how and what you share. Easily publish docs, wikis and blogs to the web. And enhance your work with code blocks, embeds, formulas, subpages and more.'
			/>
			<div className={styles.container}>
				<div className={styles.header}>
					<p className={styles.publish}>Publish</p>
					<p className={styles.share}>Share</p>
				</div>
				<div className={styles.card}>
					<p className={styles.link}>
						https://app.skiff.com/docs/237e74gf-56e98f0avB...
					</p>
					<div className={styles.publishOrCopy}>
						<p className={styles.publish}>Publish</p>
						<p className={styles.copy}>Copy link</p>
					</div>
					<div className={styles.canEdit}>
						<p>Recipients can edit</p>
						<div className={styles.switch}>
							<div className={styles.ball}></div>
						</div>
					</div>
					<div className={styles.line}></div>
					<p className={styles.authorPreview}>Author preview</p>
					<div className={styles.preview}>
						<img src={face} alt='' className={styles.face} />
						<p className={styles.authorInformation}>
							Bud Segall <span>0xa47...082c</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StealthOrShare
