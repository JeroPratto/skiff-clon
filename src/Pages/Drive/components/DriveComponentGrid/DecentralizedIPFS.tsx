import GlobalStyle from '@/Pages/styles/ComponentGridProducts.module.css'
import CardTitleAndDesc from '@/components/CardTitleAndDesc/CardTitleAndDesc'
import styles from './DecentralizedIPFS.module.css'
import whiteCube from '/drive/white-cube.svg'
import greenCube from '/drive/green-cube.svg'

const DecentralizedIPFS: React.FC = () => {
	return (
		<div className={GlobalStyle.container}>
			<CardTitleAndDesc
				title='Decentralized IPFS Storage'
				desc='Opt-in to store your files on the InterPlanetary File System, a decentralized storage network that is redundant and censorship resistant.'
			/>
			<div className={styles.container}>
				<svg height='100vh' width='100vw' className={styles.main}>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='320'
						x2='210'
						y1='196'
						y2='125'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='351'
						x2='452'
						y1='174'
						y2='110'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='334'
						x2='420'
						y1='202'
						y2='256'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='320'
						x2='210'
						y1='208'
						y2='274'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='180'
						x2='160'
						y1='288'
						y2='302'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='160'
						x2='160'
						y1='306'
						y2='340'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='158'
						x2='60'
						y1='302'
						y2='236'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='438'
						x2='438'
						y1='300'
						y2='400'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='474'
						x2='524'
						y1='128'
						y2='160'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='524'
						x2='524'
						y1='198'
						y2='160'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='524'
						x2='554'
						y1='160'
						y2='140'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeDashoffset='0'
						strokeWidth='1px'
						x1='588'
						x2='754'
						y1='144'
						y2='244'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeWidth='1px'
						strokeDashoffset='0'
						x1='545'
						x2='754'
						y1='222'
						y2='350'
					></line>
					<line
						stroke='#00A05E'
						strokeDasharray='5 5'
						strokeDashoffset='1'
						strokeWidth='1px'
						x1='140'
						x2='80'
						y1='362'
						y2='402'
					></line>
				</svg>

				<div className={styles.cube1}>
					<img src={whiteCube} alt='' />
				</div>
				<div className={styles.cube2}>
					<img src={whiteCube} alt='' />
				</div>
				<div className={styles.cube3}>
					<img src={whiteCube} alt='' />
				</div>
				<div className={styles.cube4}>
					<img src={whiteCube} alt='' />
				</div>
				<div className={styles.cube5}>
					<img src={greenCube} alt='' />
				</div>
				<svg
					className={styles.cube5y1}
					xmlns='http://www.w3.org/2000/svg'
					width='56'
					height='64'
					fill='#00A05E'
				>
					<path
						fill='#00A05E'
						stroke='#149F66'
						strokeWidth='0.793'
						d='m32.217 3.136 19.54 11.282a7.534 7.534 0 0 1 3.767 6.524v22.563a7.534 7.534 0 0 1-3.766 6.524l-19.54 11.282a7.534 7.534 0 0 1-7.534 0L5.144 50.03a7.533 7.533 0 0 1-3.767-6.524V20.942a7.534 7.534 0 0 1 3.767-6.524l19.54-11.282a7.534 7.534 0 0 1 7.533 0Z'
					></path>
					<path
						stroke='transparent'
						strokeWidth='0.75'
						d='M2.702 17.385 29 32m-.456.197 25.655-14.813M28.826 32.051v30.018'
					></path>
				</svg>
				<svg
					className={styles.cube5y2}
					xmlns='http://www.w3.org/2000/svg'
					width='56'
					height='64'
					fill='#00A05E'
				>
					<path
						fill='#00A05'
						stroke='#149F66'
						strokeWidth='0.793'
						d='m32.217 3.136 19.54 11.282a7.534 7.534 0 0 1 3.767 6.524v22.563a7.534 7.534 0 0 1-3.766 6.524l-19.54 11.282a7.534 7.534 0 0 1-7.534 0L5.144 50.03a7.533 7.533 0 0 1-3.767-6.524V20.942a7.534 7.534 0 0 1 3.767-6.524l19.54-11.282a7.534 7.534 0 0 1 7.533 0Z'
					></path>
					<path
						stroke='transparent'
						strokeWidth='0.75'
						d='M2.702 17.385 29 32m-.456.197 25.655-14.813M28.826 32.051v30.018'
					></path>
				</svg>
				<div className={styles.cube6}>
					<img src={whiteCube} alt='' />
				</div>
				<div className={styles.cube7}>
					<img src={whiteCube} alt='' />
				</div>
				<div className={styles.cube8}>
					<img src={whiteCube} alt='' />
				</div>
				<div className={styles.cube9}>
					<img src={whiteCube} alt='' />
				</div>
			</div>
		</div>
	)
}

export default DecentralizedIPFS
