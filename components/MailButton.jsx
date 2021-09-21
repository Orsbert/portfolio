import { motion, useViewportScroll } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import React, { useContext, useRef, useState } from 'react'
import isElementInViewport from '../scripts/isElementInViewPort'
import UserContext from '../scripts/Store'
import mailFilled from '@iconify/icons-ant-design/mail-filled'

export const MailButton = observer(() => {
	const context = useContext(UserContext)
	let buttonWidth = '0px'
	const { placeholderXPos, placeholderYPos, isVisible } = context.user
	const ref = useRef(null)

	if(ref.current) {
		buttonWidth = ref.current.getBoundingClientRect().width
	}

	const buttonLeft = isVisible? `calc(50vw - (${buttonWidth}px / 2))` : `calc(100vw - ${buttonWidth}px - 30px)`

	return (
		<motion.div
			className={`button primary mail-button ${!isVisible ? 'round' : ''}`}
			ref={ref}
			style={{
				top: placeholderYPos,
				left: buttonLeft,
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

	const [visible, setVisible] = useState(true)


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

				// setVisible(true)

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

				// setVisible(false)

			}
		}
	})

	return (
		<motion.div
			ref={ref}
			initial={false}
			style={{ position: 'static' }}
			animate={{ opacity: visible ? '1' : '0' }}
			transition={{delay: 0.1,}}
		>
			&nbsp;
		</motion.div>
	)
}
