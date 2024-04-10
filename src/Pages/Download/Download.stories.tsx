import type { Meta, StoryObj } from "@storybook/react"
import Download from "./Download"

const meta = {
    title: 'Download',
    component: Download,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Download>;

export default meta;

type Story = StoryObj<typeof Download>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
