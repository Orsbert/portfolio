import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Tags = () => {
	return (
		<div className='tags-wrapper'>
			<div className="tag">show all</div>
			<div className="tag tagged">react</div>
			<div className="tag selected">sass</div>
			<div className="tag">javascript</div>
		</div>
	)
}

export const PortfolioThumbnails = () => {
	return (
		<div className='portfolio-thumbnails-wrapper'>
			<Link href='/portfolio/spildram-project' className="portfolio-thumbnail">
				<Image
					src='https://via.placeholder.com/150'
					height={150}
					width={150}
				/>
			</Link>
			<Link href='/portfolio/spildram-project' className="portfolio-thumbnail">
				<Image
					src='https://via.placeholder.com/150'
					height={150}
					width={150}
				/>
			</Link>
			<Link href='/portfolio/spildram-project' className="portfolio-thumbnail">
				<Image
					src='https://via.placeholder.com/150'
					height={150}
					width={150}
				/>
			</Link>
			<Link href='/portfolio/spildram-project' className="portfolio-thumbnail">
				<Image
					src='https://via.placeholder.com/150'
					height={150}
					width={150}
				/>
			</Link>
		</div>
	)
}



export const PortfolioList = () => {
	return (
		<div className='portfolio-list container'>
			<div className="heading">Web developer portfolio</div>
			<br />
			<div className="normal">
			From 3D animations to React Js, Mobx, Graphql and Wordpress. Check out my latest web software development portfolio projects.
			</div>
			<br />
			<Tags/>
			<PortfolioThumbnails/>
		</div>
	)
}
