import styles from '@/components/ProductGridComponent/ProductGridComponent.module.css'

interface CardTitleAndDescProps {
	title: string
	desc: string
}
const CardTitleAndDesc: React.FC<CardTitleAndDescProps> = ({ title, desc }) => {
	return (
		<div className={styles.titleAndDesc}>
			<p className={styles.title}>{title}</p>
			<p className={styles.desc}>{desc}</p>
		</div>
	)
}

export default CardTitleAndDesc
