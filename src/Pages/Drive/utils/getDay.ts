export const getDay = () => {
	const today = new Date()
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]
	const month = months[today.getMonth()]
	const day = today.getDate()
	const year = today.getFullYear()
	const formattedDate = `${month}. ${day} ${year}`
	return formattedDate
}
