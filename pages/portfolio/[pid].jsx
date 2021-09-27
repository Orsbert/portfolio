import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import ErrorPage from 'next/error'
import { getPortfolio } from '../../scripts/portfolioData'
import { InlineIcon } from '@iconify/react'
import newTab from '@iconify/icons-icomoon-free/new-tab'
import { motion, useViewportScroll } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import UserContext from '../../scripts/Store'

let scrollDirection = 'down' // 'down' || 'up'
let scrollYProgressValue = 0

// @ts-ignore
export const ProjectHeader = observer(({ title }) => {

	const context = useContext(UserContext)
	const { stateScrollDirection } = context.user
	
	// listen for changes in y postion change
	const { scrollYProgress } = useViewportScroll()

	useEffect(() => (
		scrollYProgress.onChange((latest) => {
			const { stateScrollDirection } = context.user
			
			// compare with prev value && determine direction
			scrollDirection = (latest > scrollYProgressValue)? 'down': 'up'
			// set state if neccessary
			if (scrollDirection !== stateScrollDirection) { // only new
				context.setUser({ stateScrollDirection: scrollDirection })
			}
			// store value
			scrollYProgressValue = latest
		})
	),[scrollDirection])

	const headerTitleVariants = {
		up: {
			paddingLeft: '10px',
			fontSize: '18px',
		},
		down: {
			paddingLeft: '20vw',
		},
	}

	return (
		<motion.div
			id='project-header'
			className="project-header"
			// initial={'down'}
			animate={(stateScrollDirection==='up')? 'up': 'down'}
		>
			<Link href='/#portfolio-list-heading'>
				<div
					className="button back-button"
					role='button'
					title={`close`}
				>
					{'>|<'}
				</div>
			</Link>
			<motion.div
				className="title"
				variants={headerTitleVariants}
			>
				{title}
			</motion.div>
		</motion.div>
	)
})

export const ProjectContent = ({data}) => {
	return (
		<div className='project-content container'>
			<span className="normal">
				{data.description}
				<br/>
				<a
					href={data.link}
					title={`open ${data.title}`}
				>
					<span>visit the website </span>
				</a>
				<a
					href={data.link}
					target='_blank'
					rel="noreferrer"
					title={`open ${data.title} in new tab`}
				>
					<InlineIcon icon={newTab} width="24" />
				</a>
			</span>
			<br />
			<div className="image-wrapper">
				<Image
					src={data.thumbnail}
					layout='responsive'
					height={654}
					width={1349}
					alt={data.title}
				/>
			</div>
			<span className="sub-heading">About this Project</span>
			{
				data.informationList.map((text, i) => (
					<span className="normal" key={i}>{text} <br /></span>
				))
			}
			<br />
			<span className="sub-heading">Technical Sheet</span>
			<span className="normal">Code technologies used in this project.</span>
			<br />
			<ul className='normal container'>
			{
				data.techUsed.map((text, i) => (
					<li key={i}>{text}</li>
				))
			}
			</ul>
		</div>
	)
}


const PortfolioProject = () => {
	const router = useRouter()
	const { pid } = router.query

	const data = getPortfolio(pid)

	// incase of an invalid $pid
	if (data === null) {
		return <ErrorPage statusCode={404}/>
	}


	return (
		<>
			<head>
				<title>{data.title}</title>
			</head>
			<div className='portfolio-project'>
				<ProjectHeader title={data.title}/>
				<ProjectContent data={data}/>
			</div>
		</>
	)
}

export default PortfolioProject