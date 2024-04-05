import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import '@/index.css'
import EndPage from './EndPage'

const meta = {
	title: 'Components/EndPage',
	component: EndPage,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		desc: { control: 'text' },
		urlImage: { control: 'text' },
	},
} satisfies Meta<typeof EndPage>

export default meta

type Story = StoryObj<typeof EndPage>

const argsMock = {
	desc: 'Want to access your information on the go? Skiff offers privacy-first collaboration directly on your iOS and Android devices.',
	urlImage: '/endPages/mail.webp',
}
export const Default = {
	args: argsMock,
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const desc = canvas.getByText(argsMock.desc)
		expect(desc).toBeInTheDocument()
		const image = canvas.getByTestId('example-image') as HTMLImageElement
		const urlImage = new URL(image.src)
		expect(urlImage.pathname === argsMock.urlImage).toBe(true)
	},
} satisfies Story
