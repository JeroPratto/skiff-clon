import type { Meta, StoryObj } from '@storybook/react'
import SignIn from './SignIn'
import '@/index.css'
import { withRouter } from 'storybook-addon-remix-react-router'

import { expect, userEvent, within } from '@storybook/test'

const meta = {
	title: 'Pages/SignIn',
	component: SignIn,
	decorators: [withRouter],
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof SignIn>

export default meta

type Story = StoryObj<typeof SignIn>

export const Default = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const containerInputPassword = canvas.getByTestId('signin-input-password')
		const inputPassword =
			containerInputPassword.getElementsByTagName('input')[0]
		const changePasswordState =
			containerInputPassword.getElementsByTagName('button')[0]

		expect(inputPassword.type === 'password').toBe(true)
		await userEvent.click(changePasswordState)
		expect(inputPassword.type === 'text').toBe(true)
		await userEvent.click(changePasswordState)
		expect(inputPassword.type === 'password').toBe(true)
	},
} satisfies Story
