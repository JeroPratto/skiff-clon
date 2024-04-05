import type { Meta, StoryObj } from '@storybook/react'
import HeroProducts from './HeroProducts'
import { getMailHeroProduct } from '@/Pages/utils/getHeroProductsInformation'
import MailHero from '@/Pages/Mail/components/MailHero'
import '@/index.css'
import { expect, within } from '@storybook/test'
const meta = {
	title: 'Components/HeroProducts',
	component: HeroProducts,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		information: { control: 'object' },
		children: {
			control: { type: 'boolean' },
			mapping: { false: '', true: <MailHero /> },
		},
	},
} satisfies Meta<typeof HeroProducts>

export default meta

type Story = StoryObj<typeof HeroProducts>

const mock = {
	information: getMailHeroProduct(),
	children: <MailHero />,
}
export const Default = {
	args: mock,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const container = canvas.getByTestId('hero-product-container')
		const number = canvas.getByText(mock.information.number)
		const desc = canvas.getByText(mock.information.desc)
		const logo = canvas.getByTestId('hero-products-logo') as HTMLImageElement
		const urlImage = new URL(logo.src)

		expect(container).toHaveStyle(`backgroundColor:${mock.information.bgColor}`)
		expect(number).toBeInTheDocument()
		expect(desc).toBeInTheDocument()
		expect(urlImage.pathname === mock.information.logo).toBe(true)
	},
} satisfies Story
