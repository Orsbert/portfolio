import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

export const Header = () => {
	return (
		<motion.div className='header-wrapper'>
			<div className="name-wrapper">
				<Image
					src='/dp.png'
					className='avator'
					height={70}
					width={70}
				/>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<div>
					<span className='name'>ORSBERT AYESIGYE</span>
				</div>
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
	)
}
