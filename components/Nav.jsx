import React from 'react'
import { Icon } from '@iconify/react'
import githubFill from '@iconify/icons-akar-icons/github-fill'
import twitterFill from '@iconify/icons-akar-icons/twitter-fill'
export const Nav = () => {
	return (
		<nav>
			<div className="connect-icons">
				<Icon icon={twitterFill} className='nav-icon' />
				<Icon icon={githubFill} className='nav-icon' />
			</div>
		</nav>
	)
}
