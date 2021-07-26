import { motion } from 'framer-motion'
import React from 'react'

export const Header = () => {
	return (
		<div className='header-wrapper'>
			<motion.div>
				<div className="name-wrapper">
					<div className='avator'>A</div>
					<div className='name'>ORBERT AYESIGYE</div>
				</div>
				<div className='occupation-big'>
					Web Developer
				</div>
				<div className="occupation-explain">
					I help brands &amp; businesses design, develop, test, deploy and monitor web-based applications.
				</div>
				<div className="bottom-buttons-wrapper">
					<div className="button primary">
						hello@orsbert.com
					</div>
					<div className='button' >
						<span>d </span>
						<span>see my work</span>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
