import React, { useRef } from 'react'
import { Icon } from '@iconify/react'
import githubFill from '@iconify/icons-akar-icons/github-fill'
import twitterFill from '@iconify/icons-akar-icons/twitter-fill'
import { MailButtonPlaceholder } from './MailButton'

export const Footer = () => {
	const placeholderRef = useRef(null)

	return (
		<footer>
			<div className="heading">
				Wanna get in touch or talk about a project?
			</div>
			<div className="normal">
				let’s talk
			</div>
			<MailButtonPlaceholder pid='footer'/>
			<div className="connect-icons center">
				<Icon icon={twitterFill} className='nav-icon' />
				<Icon icon={githubFill} className='nav-icon' />
			</div>
		</footer>
	)
}
