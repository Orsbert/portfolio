import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import caretDownSquareFill from '@iconify/icons-bi/caret-down-square-fill'

export const Header = () => {
	
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	}

	return (
		<motion.div
			className='header-wrapper'
			animate={{
				scale: [1,2,1],
			}}
			transition={{ duration: 0.5 }}
			variants={variants}
		>
			<div className="name-wrapper">
				<div className="avator">
					<Image
						src='/dp.png'
						layout='responsive'
						height={70}
						width={70}
					/>
				</div>
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
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<div className='button'>
					<Icon
						icon={caretDownSquareFill}
						className='down-arrow'
					/>
					&nbsp;&nbsp;
					<span>see my work</span>
				</div>
			</div>
		</motion.div>
	)
}
