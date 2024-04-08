import styles from './FreeStorage.module.css'
import circle from '/icons/circle-storage.svg'
import ProductGridComponent from '@/components/ProductGridComponent/ProductGridComponent'

const FreeStorage: React.FC = () => {
	return (
		<ProductGridComponent
			title='10GB free storage'
			desc='With 10 GB free storage, migrate easily from Google Drive, Dropbox, Box, or a hard drive. Subscribe to paid plans for even more storage space.'
		>
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
		</ProductGridComponent>
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
