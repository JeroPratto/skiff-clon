import styles from './PagesHero.module.css'
import sidebarStyles from '@/Pages/Mail/components/MailHero.module.css'
import { getSidebarButtonsPages } from '../utils/getSidebarButtonsPages'
import mayorQue from '/icons/mayor-que.svg'
import shield from '/icons/shield.svg'
export const PagesHero: React.FC = () => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.main}>
				<div className={styles.header}>
					<p className={styles.nav}>
						<span>General</span> <img src={mayorQue} alt='' />{' '}
						<span className={styles.current}>Design</span>{' '}
						<img src={shield} alt='' className={styles.shield} />
					</p>
					<div className={styles.publishAndShare}>
						<p className={styles.publish}>Publish</p>
						<p className={styles.share}>Share</p>
					</div>
				</div>
				<Information />
			</div>
		</div>
	)
}

const Information = () => {
	return (
		<div className={styles.information}>
			<p className={styles.text}>
				body copy you see to learn more about what I mean. Because our fictional
				cursor is on some text, and that text is somewhere midway down the
				viewport, the bar appears over there.
			</p>
			<Table />
			<p className={styles.text}>
				The context toolbar follows user A depending on where they click in the
				editor. Hence, context! Go down to the next instance of body copy you
				see to learn more about what I mean. Because our fictional cursor is on
				some text, which appears somewhere midway down the viewport, the code is
				in nightwatch-ui in codebase.
			</p>
			<Code />
			<p className={styles.title}>The technology</p>
			<p className={styles.text}>
				The context toolbar follows user A depending on where they click in the
				editor. Hence, context! Go down to the next instance of body copy you
				see to learn more about what I mean. Because our fictional cursor is on
				some text, which appears somewhere midway down the viewport, the code is
				in nightwatch-ui in codebase.
			</p>
		</div>
	)
}
const Code = () => {
	const text = (
		<>
			<span>
				{'<'}
				<code className={styles.orange}>Animate </code>
				<code className={styles.blue}>Presence</code>
				{'/>'}
			</span>
			<span style={{ marginLeft: '1rem' }}>
				{'<'}
				<code className={styles.orange}>m.div</code>
			</span>
			<span style={{ marginLeft: '2rem' }}>
				<code className={styles.blue}>animate</code>
				{' = {{ '}
				<code className={styles.orange}>opacity: 1, scale: 1</code>
				{' }}'}
			</span>
			<span style={{ marginLeft: '2rem' }}>
				<code className={styles.blue}>exit</code>
				{' = {{ '}
				<code className={styles.orange}>opacity: 0, scale: 0.95</code>
				{' }}'}
			</span>
			<span style={{ marginLeft: '2rem' }}>
				<code className={styles.blue}>initial</code>
				{' = {{ '}
				<code className={styles.orange}>opacity: 0, scale: 0.95</code>
				{' }}'}
			</span>
			<span style={{ marginLeft: '2rem' }}>
				<code className={styles.blue}>transition</code>
				{' = {{ '}
				<code className={styles.orange}>ease: ease, duration: 0.2</code>
				{' }}'}
			</span>
			<span style={{ marginLeft: '1rem' }}>
				{'/> </'}
				<code className={styles.orange}>div</code>
				{'>'}
			</span>
			<span>
				{'</'}
				<code className={styles.orange}>Animate </code>
				<code className={styles.blue}>Presence</code>
				{'>'}
			</span>
		</>
	)
	return <div className={styles.code}>{text}</div>
}
const Table = () => {
	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.head}>
					<th>Product name</th>
					<th>Color</th>
					<th>Category</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	)
}
const Sidebar = () => {
	const sidebar = getSidebarButtonsPages()
	return (
		<div className={sidebarStyles.sidebar}>
			<div className={sidebarStyles.logoAndTitle}>
				<img src='/header/email-logo.svg' alt='' />
				<p className={sidebarStyles.title}>
					Skiff Mail <span>Night watch</span>
				</p>
			</div>
			<ul className={sidebarStyles.navbar}>
				<li className={`${sidebarStyles.item} ${sidebarStyles.active}`}>
					<div className={sidebarStyles.iconContainer}>
						<img src='/icons/new-page.svg' alt='' />
					</div>
					New page
				</li>
				{sidebar.nav.map((nav, index) => (
					<li className={sidebarStyles.item} key={index}>
						<div className={sidebarStyles.iconContainer}>
							<img src={nav.icon} alt='' />
						</div>
						{nav.name}
					</li>
				))}
			</ul>

			<ul className={sidebarStyles.mailList}>
				<li className={sidebarStyles.mailListTitle}>GENERAL</li>
				{sidebar.maiList.map((item, itemIndex) => (
					<li
						className={`${sidebarStyles.item} ${itemIndex === 2 ? sidebarStyles.hover : ''}`}
						key={itemIndex}
					>
						<div className={sidebarStyles.iconContainer}>
							<img src={item.icon} alt='' />
						</div>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	)
}
