import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'
import styles from './FreeStorage.module.css'
import circle from '/icons/circle-storage.svg'

const FreeStorage: React.FC = () => {
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='Upload, share, and preview any file'
				desc='On Skiff Drive, you can upload and share any file type or entire folders. Preview files, images, and video on the web and mobile apps.'
			/>
			<div className={styles.container}>
				<p className={styles.gigasUsed}>
					<img src={circle} alt='' /> 2.3 of 10 GB used
				</p>
				<div className={styles.border}></div>
				<div className={styles.grid}>
					<FullStorage />
					<HalfFullStorage />
					<EmptyStorage />
					<EmptyStorage />
					<EmptyStorage />
					<EmptyStorage />
					<EmptyStorage />
					<EmptyStorage />
					<EmptyStorage />
					<EmptyStorage />
					<EmptyStorage />
					<EmptyStorage />
				</div>
			</div>
		</div>
	)
}
export default FreeStorage

const FullStorage = () => {
	const cells = []
	for (let i = 0; i < 12; i++) {
		cells.push(<div key={i} className={`${styles.cell} ${styles.green}`}></div>)
	}
	return <div className={styles.storage}>{cells}</div>
}

const HalfFullStorage = () => {
	const cells = []
	for (let i = 0; i < 12; i++) {
		cells.push(
			<div
				key={i}
				className={`${styles.cell} ${i < 8 ? styles.green : ''}`}
			></div>,
		)
	}
	return <div className={styles.storage}>{cells}</div>
}

const EmptyStorage = () => {
	const cells = []
	for (let i = 0; i < 12; i++) {
		cells.push(<div key={i} className={styles.cell}></div>)
	}
	return <div className={styles.storage}>{cells}</div>
}
