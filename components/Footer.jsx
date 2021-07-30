import React from 'react'
import { Icon } from '@iconify/react'
import githubFill from '@iconify/icons-akar-icons/github-fill'
import twitterFill from '@iconify/icons-akar-icons/twitter-fill'

export const Footer = () => {
	return (
		<footer>
			<div className="heading">
				Wanna get in touch or talk about a project?
			</div>
			<div className="normal">
				let’s talk
			</div>
			<div className="button primary">
				hello@orsbert.com
			</div>
			<div className="connect-icons">
				<Icon icon={twitterFill} className='nav-icon' />
				<Icon icon={githubFill} className='nav-icon' />
			</div>
		</footer>
	)
}
