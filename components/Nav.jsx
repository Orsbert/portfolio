import React from 'react'
import { Icon } from '@iconify/react'
import githubFill from '@iconify/icons-akar-icons/github-fill'
import twitterFill from '@iconify/icons-akar-icons/twitter-fill'

export const TwitterLink = () => {
	return (
		<a
			title='Twitter profile'
			href='https://twitter.com/ayesigye_osbert'
			target='_blank'
			rel="noreferrer"
		>

			<Icon
				icon={twitterFill}
				className='nav-icon'
			/>
		</a>
	)
}

export const GithubLink = () => {
	return (
		<a
			title='Twitter profile'
			href='https://github.com/orsbert'
			target='_blank'
			rel="noreferrer"
		>
	
			<Icon
				icon={githubFill}
				className='nav-icon'
			/>
		</a>
	)
}


export const Nav = () => {
	return (
		<nav>
			<div className="connect-icons">
				<TwitterLink/>
				<GithubLink/>
			</div>
		</nav>
	)
}
