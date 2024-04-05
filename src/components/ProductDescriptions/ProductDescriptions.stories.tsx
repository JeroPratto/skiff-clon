import type { Meta, StoryObj } from '@storybook/react'
import ProductDescriptions from './ProductDescriptions'
import '@/index.css'
import getMailProductsDescriptions from '@/Pages/Mail/utils/getMailProductsDescriptions'

const meta = {
	title: 'Components/ProductDescriptions',
	component: ProductDescriptions,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		items: { control: 'array' },
	},
} satisfies Meta<typeof ProductDescriptions>

export default meta

type Story = StoryObj<typeof ProductDescriptions>

export const Default = {
	args: {
		items: getMailProductsDescriptions(),
	},
} satisfies Story
