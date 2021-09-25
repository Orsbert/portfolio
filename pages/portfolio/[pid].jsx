import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import ErrorPage from 'next/error'
import { getPortfolio } from '../../scripts/portfolioData'

export const ProjectHeader = ({title}) => {

	return (
		<div id='project-header' className="project-header">
			<Link href='/#portfolio-list-heading'>
				<div className="button back-button" role='button'>{'>|<'}</div>
			</Link>
			<div className="title">{title}</div>
		</div>
	)
}

export const ProjectContent = ({data}) => {
	return (
		<div className='project-content container'>
			<span className="normal">
				{data.description}
				<br/>
				<Link href={data.link}>visit the website</Link>
			</span>
			<br />
			<br />
			<div className="image-wrapper">
				<Image
					src={data.thumbnail}
					layout='responsive'
					height={654}
					width={1349}
				/>
			</div>
			<span className="sub-heading">About this Project</span>
			{
				data.informationList.map((text, i) => (
					<span className="normal" key={i}>{text} <br /></span>
				))
			}
			<br />
			<br />
			<span className="sub-heading">Technical Sheet</span>
			<span className="normal">Code technologies used in this project.</span>
			<br />
			<ul className='normal'>
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