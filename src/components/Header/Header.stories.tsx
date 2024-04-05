import type { Meta } from '@storybook/react'
import Header from './Header'
import { withRouter } from 'storybook-addon-react-router-v6'
import '@/index.css'
import { within, expect, userEvent } from '@storybook/test'

const meta = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Header>

export default meta

export const Mobile = () => (
	<div style={{ position: 'relative', height: '40vh', width: '700px' }}>
		<Header />
	</div>
)

Mobile.parameters = {
	viewport: { defaultViewport: 'mobile2' },
}

Mobile.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
	const canvas = within(canvasElement)

	const menuButton = canvas.getByTestId('header-mobile-menu-button')
	const menu = canvas.queryByTestId('header-mobile-menu')

	const productsButton = canvas.getByTestId(
		'header-mobile-open-products-submenu',
	)
	const productsSubmenu = canvas.getByTestId('header-mobile-products-submenu')

	expect(menu).toBeInTheDocument()
	expect(menuButton).toBeInTheDocument()
	expect(menu, 'menu should be closed').toHaveStyle('display:none')

	await userEvent.click(menuButton)
	expect(menu, 'menu should be open').toHaveStyle('display:block')

	expect(productsSubmenu, 'submenu should be closed').toHaveStyle(
		'display:none',
	)
	await userEvent.click(productsButton)
	expect(productsSubmenu, 'submenu should be open').toHaveStyle('display:block')
	await userEvent.click(productsButton)
	expect(productsSubmenu, 'submenu should be closed').toHaveStyle(
		'display:none',
	)

	await userEvent.click(menuButton)
	expect(menu, 'menu should be closed').toHaveStyle('display:none')
}

export const Desktop = () => (
	<div style={{ position: 'relative', height: '40vh' }}>
		<Header />
	</div>
)

Desktop.parameters = {
	viewport: { defaultViewport: 'desktop' },
}
