import ProductGridComponent from '@/components/ProductGridComponent/ProductGridComponent'
import styles from './RealTimeCollaboration.module.css'
import arrow from '/icons/big-arrow-black.svg'

const RealTimeCollaboration: React.FC = () => {
	return (
		<ProductGridComponent
			title='Effortless real-time collaboration'
			desc='Write and edit together in real time. Connect securely and confidently with your collaborators from anywhere in the world.'
		>
			<div className={styles.columns}>
				<FirstColumn />
				<SecondColumn />
				<FirstColumn />
				<Persons />
			</div>
		</ProductGridComponent>
	)
}

export default RealTimeCollaboration

const Persons = () => {
	const faces = [
		'/faces/lella.svg',
		'/faces/nightwatch.svg',
		'/faces/jason-sunny.svg',
		'/faces/0x60.svg',
	]
	return (
		<>
			{faces.map((face, index) => (
				<div className={styles.person} key={index}>
					<div className={styles.arrow}>
						<img src={arrow} alt='' />
					</div>
					<div className={styles.face}>
						<img src={face} alt='' />
					</div>
				</div>
			))}
		</>
	)
}

const FirstColumn = () => {
	return (
		<div className={styles.column}>
			<SinglePage />
			<SinglePage />
			<CompletePage />
			<SinglePage />
			<SinglePage />
			<CompletePage />
			<CompletePage />
			<SinglePage />
			<SinglePage />
			<CompletePage />
			<SinglePage />
			<SinglePage />
		</div>
	)
}
const SecondColumn = () => {
	return (
		<div className={styles.column}>
			<SinglePage />
			<SinglePage />
			<CompletePage />
			<CompletePage />
			<CompletePage />
			<CompletePage />
			<CompletePage />
			<SinglePage />
			<SinglePage />
			<CompletePage />
			<SinglePage />
			<SinglePage />
		</div>
	)
}

const SinglePage = () => {
	return (
		<div className={styles.page}>
			<div className={styles.title}></div>
			<div className={styles.desc}></div>
			<div className={styles.long}></div>
			<div className={styles.short}></div>
			<div className={styles.semiLong}></div>
			<div className={styles.long}></div>
			<div className={styles.short}></div>
			<div className={styles.semiLong}></div>
			<div className={styles.long}></div>
			<div className={styles.short}></div>
			<div className={styles.semiLong}></div>
		</div>
	)
}

const CompletePage = () => {
	return (
		<div className={styles.page}>
			<div className={styles.title}></div>
			<div className={styles.desc}></div>
			<div className={styles.long}></div>
			<div className={styles.short}></div>
			<div className={styles.semiLong}></div>
			<div className={styles.complete}></div>
			<div className={styles.long}></div>
			<div className={styles.short}></div>
			<div className={styles.semiLong}></div>
		</div>
	)
}
