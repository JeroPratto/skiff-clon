import type { Meta, StoryObj } from '@storybook/react'
import Mail from './Mail'
import '@/index.css'

const meta = {
	title: 'Pages/Mail',
	component: Mail,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Mail>

export default meta

type Story = StoryObj<typeof Mail>

export const Default = {
	args: {
		// props
	},
} satisfies Story
