import type { Meta, StoryObj } from '@storybook/react'
import Pages from './Pages'

const meta = {
	title: 'Pages/Pages',
	component: Pages,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Pages>

export default meta

type Story = StoryObj<typeof Pages>

export const Default = {
	args: {
		// props
	},
} satisfies Story
