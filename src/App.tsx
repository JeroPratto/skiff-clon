import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Mail } from './Pages/Mail'
import { Pages } from './Pages/Pages'
import { Drive } from './Pages/Drive'
import { useEffect } from 'react'
import { SignIn } from './Pages/SignIn'

function App() {
	return (
		<BrowserRouter>
			<ScrollTop />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/mail' element={<Mail />} />
				<Route path='/pages' element={<Pages />} />
				<Route path='/drive' element={<Drive />} />
				<Route path='/signin' element={<SignIn />} />
			</Routes>
			<Footer />
		</BrowserRouter>
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
