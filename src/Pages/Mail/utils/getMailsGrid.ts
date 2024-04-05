import { MailPreviewInterface } from './getMails'

export const getMailsGrid = (): MailPreviewInterface[] => {
	const data = [
		{
			view: false,
			check: true,
			face: '/faces/heinrich.svg',
			name: 'Heinrich Lox',
			subject: 'Update to engineering status',
			advance: 'Hey all, After touchin base with Laura:',
		},
		{
			view: false,
			check: false,
			face: '/faces/angelina.svg',
			name: 'Angelina',
			subject: 'Product strategy sync',
			advance: 'Hey Jo, will you be joining us this call?',
		},
		{
			view: true,
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
			view: true,
			check: false,
			face: '/faces/face-icon-blur-green.svg',
			name: 'VG9ueSwgUGF1bGllLCBDa',
			subject: 'VXBjb21pbmcgZX',
			advance: 'RG9uJ3QgbWlzcyBvdXQhIEpvaW4gdXMgZm9yIG91ciB1cGN',
		},
		{
			view: true,
			check: false,
			face: '/faces/face-icon-blur-mix.svg',
			name: 'SmFzb24sIFN1bm55LCBK',
			subject: 'TWVldGluZyBUb21vcnJvdyBh',
			advance: 'bGVhc2UgbGV0IG1lIGtub3cgaWYgeW91IG5lZWQgdG8g',
		},
	]
	return data
}
