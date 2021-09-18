import { motion, useViewportScroll } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import React, { useContext, useEffect, useRef } from 'react'
import isElementInViewport from '../scripts/isElementInViewPort'
import UserContext from '../scripts/Store'
import mailFilled from '@iconify/icons-ant-design/mail-filled'

export const MailButton = observer(() => {
	const context = useContext(UserContext)
	let buttonLeft = '0px'
	const { placeholderXPos, placeholderYPos, isVisible } = context.user
	const ref = useRef(null)
	if(ref.current) {
		const {width: buttonWidth} = ref.current.getBoundingClientRect()
		buttonLeft = isVisible ?
		`calc(50vw - (${buttonWidth}px / 2))` : `calc(100vw - ${buttonWidth}px - 5px)`
	}

	return (
		<motion.div
			id='mail-button'
			className={`button primary ${!isVisible && 'round'}`}
			ref={ref}
			style={{
				left: buttonLeft,
				top: placeholderYPos,
			}}
		>
			{isVisible && 'hello@orsbert.com'}
			{!isVisible && <Icon icon={mailFilled} style={{fontSize: '28px'}} />}
		</motion.div>
	)
})

let prevInView = null

export const MailButtonPlaceholder = () => {
	const ref = useRef(null)

	const context = useContext(UserContext)


	// listen for changes in y postion change
	const { scrollYProgress } = useViewportScroll()
	scrollYProgress.onChange(() => {
		if (ref.current) {
			var rect = ref.current.getBoundingClientRect()
			if (isElementInViewport(ref.current)) {
				
				prevInView = true
				
				context.setUser({
					placeholderXPos: rect.left,
					placeholderYPos: rect.top,
					isVisible: true,
				})

			}
			else {
				// is out of view
				if (prevInView === false) {
					context.setUser({
						placeholderXPos: 20,
						placeholderYPos: 'calc(95vh - 20px)',
						isVisible: false,
					})
				}
				
				prevInView = false
			}
		}
	})

	return (
		<div
			ref={ref}
			style={{
				width: '54px',
				overflow: 'hidden',
			}}
		>
			&nbsp;
		</div>
	)
}
