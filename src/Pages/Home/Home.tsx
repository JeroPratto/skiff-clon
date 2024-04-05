import React from 'react'
import styles from './Home.module.css'
import { HomeBgImage } from './bg-image'
import notionXSkiff from '/home/notion-x-skiff.svg'
import team from '/home/team.gif'
import arrow from '/home/arrow-orange.svg'

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.bgImage}>{HomeBgImage()}</div>
			<div className={styles.informationContainer}>
				<h1 className={styles.title}>
					We are excited to share that <span>Skiff is joining Notion.</span>
				</h1>
				<div className={styles.notionXSkiffImage}>
					<img src={notionXSkiff} alt='' />
				</div>
				<p className={styles.information}>
					Skiff's mission is to bring freedom to the internet by helping people
					collaborate and communicate with confidence and privacy. We see a deep
					alignment with Notion's vision to build a connected workspace and
					enable everyone to build tools that reflect their values and protect
					their privacy.
					<br />
					<br />
					We're extremely excited to accelerate this mission by joining forces
					with Notion's world-class team and we are pursuing big plans for
					making all of our online lives freer and more empowered.
					<br />
					<br />
					We look forward to continuing to serve you with even more exciting
					updates on the horizon.
				</p>
			</div>
			<div className={styles.lookingForward}>
				<p className={styles.titleLooking}>
					Looking forward to waht's ahead - the Skiff team
				</p>
				<div className={styles.gifContainer}>
					<img src={team} alt='' />
				</div>
				<p className={styles.learnAbout}>
					Learn about migrating your data <img src={arrow} alt='' />
				</p>
			</div>
		</div>
	)
}

export default Home
