export interface MailPreviewInterface {
	view: boolean
	check: boolean
	face: string
	name: string
	subject: string
	advance: string
}

export const getMails = (): MailPreviewInterface[] => {
	const data = [
		{
			view: true,
			check: true,
			face: '/faces/heinrich.svg',
			name: 'Heinrich Lox',
			subject: 'Update to engineering status',
			advance: 'Hey all, After touchin base with Laura:',
		},
		{
			view: true,
			check: true,
			face: '/faces/angelina.svg',
			name: 'Angelina',
			subject: 'Product strategy sync',
			advance: 'Hey Jo, will you be joining us this call?',
		},
		{
			view: false,
			check: false,
			face: '/faces/jason.svg',
			name: 'Jason, Sunny, Joseph',
			subject: 'Rewind Feature Eng Sync',
			advance:
				"I'm not entirely sure I agree with that approach. Users won't understand!",
		},
		{
			view: true,
			check: false,
			face: '/faces/0x60.svg',
			name: '0x600f...er2',
			subject: 'Where to find contract agreement?',
			advance:
				'Hey Jason, you mentioned the other day that there was an archival Sketch file for the original email mocks.',
		},
		{
			view: false,
			check: false,
			face: '/faces/tony.svg',
			name: 'Tony, Paulie, Chris M',
			subject: 'Upcoming event',
			advance: "Don't miss out! Join us for our upcoming event.",
		},
		{
			view: false,
			check: false,
			face: '/faces/jason-sunny.svg',
			name: 'Jason, Sunny, Joseph',
			subject: 'Meeting Tomorrow at 2 PM',
			advance: 'lease let me know if you need to reschedule.',
		},
		{
			view: false,
			check: false,
			face: '/faces/nightwatch.svg',
			name: 'Nightwatch',
			subject: 'Confirmation of Payment Received',
			advance: 'We have received your payment for invoice #425116.',
		},
		{
			view: false,
			check: false,
			face: '/faces/lella.svg',
			name: 'Lella Lombardi',
			subject: 'New Product Launch',
			advance: 'We would be delighted if you could attend our launch event.',
		},
		{
			view: false,
			check: false,
			face: '/faces/florence.svg',
			name: 'Florence Knoll',
			subject: 'Job Offer',
			advance:
				'After careful consideration, we would like to offer you the position.',
		},
	]
	return data
}
