import styles from './AddOrRegisterDomain.module.css'
import tick from '/icons/tick-green.svg'
import points from '/icons/three-points.svg'
import arrow from '/icons/arrow-grey.svg'
import ProductGridComponent from '@/components/ProductGridComponent/ProductGridComponent'

export const AddOrRegisterDomain = () => {
	return (
		<ProductGridComponent
			title='Add or register your custom domain'
			desc='Customize your email address in one click with a privacy-first Skiff
			Domain, or connect any domain you own. We salute you,
			frank@festivus.com. Be the master of your domain.'
		>
			<AddOrRegisterItems />
		</ProductGridComponent>
	)
}

const AddOrRegisterItems = () => {
	const names = [
		{ mail: 'girlmoregirl.com', date: 'Renews Mar 5. 2025' },
		{ mail: 'rsarightaway.com', date: 'Renews Mar 6. 2025' },
		{ mail: 'diffiecube.com', date: 'Renews Apr 4. 2025' },
		{ mail: 'nightwatch.com', date: 'Renews Apr 5. 2025' },
	]
	return (
		<ul className={styles.container}>
			{names.map(({ mail, date }, index) => (
				<li className={styles.item} key={index}>
					<div className={styles.statusAndMail}>
						<img src={tick} alt='' className={styles.status} />
						<p className={styles.mailAndDate}>
							{mail} <span>{date}</span>
						</p>
					</div>
					<div className={styles.pointsAndArrow}>
						<img src={points} alt='' />
						<img src={arrow} alt='' />
					</div>
				</li>
			))}
		</ul>
	)
}
