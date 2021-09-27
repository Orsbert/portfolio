import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getTagsList, portfolioDataList } from '../scripts/portfolioData'
import { observer } from 'mobx-react-lite'
import UserContext from '../scripts/Store'
import { motion } from 'framer-motion'

// @ts-ignore
export const Tag = observer(({ tag }) => {

	const context = useContext(UserContext)
	const { selectedTag, tagsTagged } = context.user
	let tagged = false

	if (tagsTagged) {
		tagged = tagsTagged.includes(tag)
	}

	const handleClick = () => {
		context.setUser({ selectedTag: tag })
	}

	return (
		<div
			className={`tag ${(tag===selectedTag)? 'selected':(tagged)? 'tagged':''}`}
			role='button'
			key={tag}
			onClick={handleClick}
		>
			{tag}
		</div>
	)
})


const tagsList = getTagsList()

export const Tags = () => {
	return (
		<div className='tags-wrapper container'>
			{/* @ts-ignore */}
			<Tag tag={'show all'}/>
			{
				tagsList.map(tag => (
					// @ts-ignore
					<Tag tag={tag} key={tag}/>
				))
			}
		</div>
	)
}

// @ts-ignore
export const PortfolioThumbnail = ({ slug, thumbnail, tags }) => {
	const context = useContext(UserContext)
	
	const handleMouseEnter = () => {
		context.setUser({tagsTagged: tags})
	}
	
	const handleMouseLeave = () => {
		context.setUser({tagsTagged: []})
	}
	
	return (
		<motion.div
			className="portfolio-thumbnail"
			role='button'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			layout
		>
			<Link href={`/portfolio/${slug}`}>
				<a>
					<Image
						src={thumbnail}
						height={150}
						width={309.4}
						alt={slug}
					/>
				</a>
			</Link>
		</motion.div>
	)
}


export const PortfolioThumbnails = observer(() => {

	const context = useContext(UserContext)
	const { selectedTag } = context.user

	const filtered = (selectedTag === 'show all') ?
		portfolioDataList : portfolioDataList.filter(portfolio => portfolio.tags.includes(selectedTag))

	return (
		<motion.ul className='portfolio-thumbnails-wrapper' layout>
			{filtered.map(({slug, thumbnail, tags}) => (
				<PortfolioThumbnail slug={slug} thumbnail={thumbnail} tags={tags} key={slug}/>
			))}
		</motion.ul>
	)
})


export const PortfolioList = () => {
	return (
		<div className='portfolio-list'>
			<div className="container">
				<div id='portfolio-list-heading' className="heading">Web developer portfolio</div>
				<br />
				<div className="normal">
				From 3D animations to React Js, Mobx, Graphql and Wordpress. Check out my latest web software development portfolio projects.
				</div>
				<br />
			</div>
			<Tags/>
			<div className="container">
				<PortfolioThumbnails/>
			</div>
		</div>
	)
}
