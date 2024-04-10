import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '/header/logo.svg'
import { HeaderMenu } from './components/HeaderMenu'
import {
	HeaderDropdownProducts,
	HeaderDropdownResources,
} from './components/HeaderDropdown/HeaderDropdown'
import useIsView from '../utils/useIsView'

const Header: React.FC = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const isView = useIsView()

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		isView && (
			<nav className={styles.nav}>
				<Link to='/' className={styles.logoContainer} aria-label='go to home'>
					<img src={logo} alt='' className={styles.logo} />
				</Link>
				<HeaderDropdownProducts />
				<HeaderDropdownResources />
				<Link to='/download' className={styles.link}>
					Download
				</Link>
				<div className={styles.loginAndMenu}>
					<Link to='signin' className={styles.login}>
						Sign in
					</Link>
					{width < 771 ? <HeaderMenu /> : ''}
				</div>
			</nav>
		)
	)
}

export default Header
