import { motion, useViewportScroll } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import React, { useContext, useRef } from 'react'
import isElementInViewport from '../scripts/isElementInViewPort'
import UserContext from '../scripts/Store'

export const MailButton = observer(() => {
	const context = useContext(UserContext)
	const { placeholderYPos } = context.user

	return (
		<motion.div id='mail-button' className="button primary" style={{top: placeholderYPos}}>
			hello@orsbert.com
		</motion.div>
	)
})

let prevInView = null

export const MailButtonPlaceholder = ({pid}) => {
	const ref = useRef(null)

	const context = useContext(UserContext)


	// listen for changes in y postion change
	const { scrollYProgress } = useViewportScroll()
	scrollYProgress.onChange(() => {
		if (ref.current) {
			var rect = ref.current.getBoundingClientRect()
			if (isElementInViewport(ref.current)) {
				
				prevInView = true
				
				context.setUser({ placeholderYPos: rect.top })

			}
			else {
				// is out of view
				if (prevInView === false) {
					context.setUser({ placeholderYPos: 'calc(98vh - 20px)' })
				}
				
				prevInView = false
			}
		}
	})

	return (
		<div ref={ref}>
			MailButtonPlaceholder
		</div>
	)
}
