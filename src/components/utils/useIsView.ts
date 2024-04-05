import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useIsView = () => {
	const location = useLocation()
	const [isView, setIsView] = useState(location.pathname !== '/signin')

	useEffect(() => {
		setIsView(location.pathname !== '/signin')
	}, [location])

	return isView
}

export default useIsView
