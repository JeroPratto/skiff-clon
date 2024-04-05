interface DriveHeroFile {
	logo: string
	name: string
	type?: string
	size?: string
}
const getDriveHeroFiles = (): DriveHeroFile[] => {
	const data = [
		{
			logo: '/icons/folder.svg',
			name: 'Q1 overview',
		},
		{
			logo: '/icons/file.svg',
			name: 'Team review',
			type: 'DOCX',
			size: '6.5KB',
		},
		{
			logo: '/icons/calendar.svg',
			name: 'BG-02.png',
			type: 'PNG',
			size: '5.5GB',
		},
		{
			logo: '/icons/chart.svg',
			name: 'FetchTable.py',
			type: 'CODE',
			size: '7.5MB',
		},
		{
			logo: '/icons/calendar.svg',
			name: 'CapTable.xls',
			type: 'XLS',
			size: '7.0GB',
		},
		{
			logo: '/icons/wave-sound.svg',
			name: 'Blonded',
			type: 'MP3',
			size: '4.5MB',
		},
		{
			logo: '/icons/orange-file.svg',
			name: 'daily-finances',
			type: 'ZIP',
			size: '8.0KB',
		},
		{
			logo: '/icons/file.svg',
			name: 'Town hall',
			type: 'PAGE',
			size: '5.5GB',
		},
		{
			logo: '/icons/folder.svg',
			name: 'Milestones',
		},
	]
	return data
}

export default getDriveHeroFiles
