import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export const ProjectHeader = () => {
	const router = useRouter()
	const { pid } = router.query
	return (
		<div id='project-header' className="project-header container">
			<Link href='/#portfolio-list-heading'>
				<div className="button back-button">{'>|<'}</div>
			</Link>
			<div className="heading title">Spildram - {pid}</div>
		</div>
	)
}

export const ProjectContent = () => {
	return (
		<div className='project-content container'>
			<span className="normal">
				Social media platform for medical students and personel developed as the developer and UI designer.
				<br/>
				<Link href='https://spildram.com'>visit the website</Link>
			</span>
			<br />
			<div className="image-wrapper center">
				<Image
					src='https://via.placeholder.com/500'
					// layout='responsive'
					height={500}
					width={500}
				/>
			</div>
			<span className="sub-heading">About this Project</span>
			<span className="normal">
				On this project, I was the developer and UI designer. I was responsible for the
				UI architecture, the frontend and backend development. The idea was to combine a social network with a study application.
			</span>
			<br />
			<span className="normal">
				The UI was concieved as mobile first approach since most of the expected users use mobile the most.
			</span>
			<br />
			<span className="sub-heading">Technical Sheet</span>
			<span className="normal">Code technologies used in this project.</span>
			<br />
			<ul className='normal'>
				<li>Figma</li>
				<li>React js</li>
				<li>CSS - scripted with SASS</li>
				<li>Graphql</li>
				<li>Ant design</li>
				<li>Python - served with Flask</li>
				<li>MongoDB</li>
				<li>Google Cloud Storage</li>
			</ul>
		</div>
	)
}


const PortfolioProject = () => {
	return (
		<div className='portfolio-project'>
			<ProjectHeader/>
			<ProjectContent/>
		</div>
	)
}

export default PortfolioProject