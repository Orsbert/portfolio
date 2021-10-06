import React, { useRef } from 'react'
import { MailButtonPlaceholder } from './MailButton'
import { GithubLink, LinkedinLink, TwitterLink } from './Nav'

export const Footer = () => {

	return (
		<footer>
			<div className="heading">
				Wanna get in touch or talk about a project?
			</div>
			<div className="normal">
				let’s talk
			</div>
			<MailButtonPlaceholder tag={'footer'} />
			<div className="connect-icons center">
				<TwitterLink/>
				<LinkedinLink/>
				<GithubLink/>
			</div>
		</footer>
	)
}
