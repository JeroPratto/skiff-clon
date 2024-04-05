import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'

interface CardTitleAndDescProps {
	title: string
	desc: string
}
const CardTitleAndDesc: React.FC<CardTitleAndDescProps> = ({ title, desc }) => {
	return (
		<div className={GlobalStyle.titleAndDesc}>
			<p className={GlobalStyle.title}>{title}</p>
			<p className={GlobalStyle.desc}>{desc}</p>
		</div>
	)
}

export default CardTitleAndDesc
