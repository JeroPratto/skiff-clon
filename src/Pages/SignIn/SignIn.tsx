import React, { useState } from 'react'
import styles from './SignIn.module.css'
import { Link } from 'react-router-dom'
import visible from '/icons/visible-password.svg'
import invisible from '/icons/invisible-password.svg'

const SignIn: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const toggleState = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.preventDefault()
		setIsVisible(!isVisible)
	}
	return (
		<div className={styles.container}>
			<div className={styles.information}>
				<Link to='/' className={styles.imageContainer}>
					<img src='/header/logo.svg' alt='' />
				</Link>
				<p className={styles.title}>Login to Skiff</p>
				<p className={styles.desc}>
					Welcome to a workspace that's secure, powerful, and totally private.
				</p>
				<form className={styles.form}>
					<input className={styles.email} placeholder='Email or username' />
					<div
						className={styles.passwordContainer}
						data-testid='signin-input-password'
					>
						<input
							className={styles.password}
							placeholder='Password'
							type={isVisible ? 'text' : 'password'}
						/>
						<button className={styles.visibilityPassword} onClick={toggleState}>
							<img src={isVisible ? visible : invisible} alt='' />
						</button>
					</div>
					<button className={styles.logInButton}>Log in</button>
				</form>
				<p className={styles.forgot}>Forgot password?</p>
				<p className={styles.signup}>
					Don't have an account? <span>Sign up</span>
				</p>
			</div>
		</div>
	)
}

export default SignIn
