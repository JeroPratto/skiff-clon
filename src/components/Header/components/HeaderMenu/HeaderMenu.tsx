import React, { useEffect, useRef, useState } from 'react'
import styles from './HeaderMenu.module.css'
import arrow from '/header/arrow.svg'
import {
	getHeaderProductsItems,
	getHeaderResourcesItems,
} from './utils/getHeaderMenuItems'
import { Link } from 'react-router-dom'

const HeaderMenu: React.FC = () => {
	const products = getHeaderProductsItems()
	const resources = getHeaderResourcesItems()
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [open, setOpen] = useState(false)
	const toggleState = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.stopPropagation()
		setOpen(!open)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				if (open) setOpen(false)
			}
		}
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	})

	return (
		<>
			<button
				className={styles.menuButton}
				onClick={toggleState}
				data-testid='header-mobile-menu-button'
			>
				{open ? <CloseSvg /> : <OpenSvg />}
			</button>
			<div
				className={`${styles.menuContainer} ${open ? styles.open : ''}`}
				ref={containerRef}
				data-testid='header-mobile-menu'
			>
				<ProductDropDownMobile {...products} />
				<ResourcesDropDownMobile {...resources} />
				<button className={styles.openSubMenu}>Download</button>
			</div>
		</>
	)
}

export default HeaderMenu

interface ProductDropDownMobile {
	title: string
	items: {
		title: string
		urlImage: string
		desc: string
		href: string
	}[]
}
const ProductDropDownMobile: React.FC<ProductDropDownMobile> = ({
	title,
	items,
}) => {
	const [open, setOpen] = useState(false)
	const toggleState = () => setOpen((o) => !o)
	return (
		<>
			<button
				className={styles.openSubMenu}
				onClick={toggleState}
				data-testid='header-mobile-open-products-submenu'
			>
				{title}
				<img src={arrow} alt='' className={open ? styles.rotate : ''} />
			</button>
			<ul
				className={`${styles.subMenuProduct} ${open ? styles.open : ''}`}
				data-testid='header-mobile-products-submenu'
			>
				{items.map((item, index) => (
					<li key={index}>
						<Link to={item.href} className={styles.subMenuItemProduct}>
							<img
								src={item.urlImage}
								alt={item.title}
								className={styles.imageProduct}
							/>
							<p className={styles.titleAndDesc}>
								<span className={styles.titleProduct}>{item.title}</span>
								<span className={styles.descProduct}>{item.desc}</span>
							</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

interface ResourcesDropDownMobile {
	title: string
	items: {
		urlImage: string
		desc: string
	}[]
}

const ResourcesDropDownMobile: React.FC<ResourcesDropDownMobile> = ({
	title,
	items,
}) => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<button className={styles.openSubMenu} onClick={() => setOpen(!open)}>
				{title}
				<img src={arrow} alt='' className={open ? styles.rotate : ''} />
			</button>
			<ul className={`${styles.subMenuResources} ${open ? styles.open : ''}`}>
				{items.map((item, index) => (
					<li className={styles.subMenuItemResources} key={index}>
						<img src={item.urlImage} alt={item.desc} />
						<p>{item.desc}</p>
					</li>
				))}
			</ul>
		</>
	)
}

const OpenSvg = () => {
	return (
		<svg width='16' height='16' viewBox='0 0 20 20'>
			<path
				fill='transparent'
				stroke-width='2'
				stroke='white'
				stroke-linecap='square'
				d='M 2 2.5 L 20 2.5'
			></path>
			<path
				fill='transparent'
				stroke-width='2'
				stroke='white'
				stroke-linecap='square'
				d='M 2 9.423 L 20 9.423'
				opacity='1'
			></path>
			<path
				fill='transparent'
				stroke-width='2'
				stroke='white'
				stroke-linecap='square'
				d='M 2 16.346 L 20 16.346'
			></path>
		</svg>
	)
}
const CloseSvg = () => {
	return (
		<svg width='16' height='16' viewBox='0 0 20 20'>
			<path
				fill='transparent'
				stroke-width='2'
				stroke='white'
				stroke-linecap='square'
				d='M 3 16.5 L 17 2.5'
			></path>
			<path
				fill='transparent'
				stroke-width='2'
				stroke='white'
				stroke-linecap='square'
				d='M 2 9.423 L 20 9.423'
				opacity='0'
			></path>
			<path
				fill='transparent'
				stroke-width='2'
				stroke='white'
				stroke-linecap='square'
				d='M 3 2.5 L 17 16.346'
			></path>
		</svg>
	)
}
