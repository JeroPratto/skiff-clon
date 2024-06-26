import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
	const Mail = lazy(() => import('./Pages/Mail/Mail'))
	const Pages = lazy(() => import('./Pages/Pages/Pages'))
	const Drive = lazy(() => import('./Pages/Drive/Drive'))
	const SignIn = lazy(() => import('./Pages/SignIn/SignIn'))
	const Download = lazy(() => import('./Pages/Download/Download'))
	return (
		<Suspense>
			<BrowserRouter>
				<ScrollTop />
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/mail' element={<Mail />} />
					<Route path='/pages' element={<Pages />} />
					<Route path='/drive' element={<Drive />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/download' element={<Download />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Suspense>
	)
}

export default App

const ScrollTop = () => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}
