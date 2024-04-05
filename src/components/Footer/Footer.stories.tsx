import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

import Footer from './Footer'
import '@/index.css'

const meta = {
	title: 'Components/Footer',
	component: Footer,
	tags: ['autodocs'],
	decorators: [withRouter],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof Footer>

export const Default = {} satisfies Story
