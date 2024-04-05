import type { Meta, StoryObj } from '@storybook/react'
import Drive from './Drive'
import '@/index.css'

const meta = {
	title: 'Pages/Drive',
	component: Drive,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Drive>

export default meta

type Story = StoryObj<typeof Drive>

export const Default = {
	args: {
		// props
	},
} satisfies Story
