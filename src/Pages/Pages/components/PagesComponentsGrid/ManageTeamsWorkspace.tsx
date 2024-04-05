import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'
import styles from './ManageTeamsWorkspace.module.css'
import getColumnsInformation from '../../utils/getColumnsInformation'

const ManageTeamsWorkspace = () => {
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='Securely manage your team’s workspace'
				desc='With the ability to flexibly create teams and delegate permissions, Skiff gives you all you need to build and scale your team.'
			/>
			<TeamWorkspace />
		</div>
	)
}

export default ManageTeamsWorkspace

const TeamWorkspace = () => {
	const columns = getColumnsInformation()
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p>TEAM</p>
				<p>ADMINS</p>
				<p>ACCESS</p>
			</div>

			{columns.map((column, index) => (
				<Columns {...column} key={index} />
			))}
		</div>
	)
}

interface Column {
	logo: string
	title: string
	people: string
	profileImages: string[]
	access: string
}
const Columns = (props: Column) => {
	return (
		<div className={styles.column}>
			<div className={styles.logoAndTitle}>
				<div className={styles.logoContainer}>
					<img src={props.logo} alt='' />
				</div>
				<p className={styles.title}>
					{props.title} <span>{props.people} people</span>
				</p>
			</div>
			<div className={styles.profileImages}>
				<img src={props.profileImages[0]} alt='' />
				<img
					src={props.profileImages[1]}
					alt=''
					className={styles.secondImage}
				/>
			</div>
			<div className={styles.access}>
				<p>{props.access}</p>
			</div>
		</div>
	)
}
