import { motion, useViewportScroll } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import isElementInViewport from '../scripts/isElementInViewPort'
import UserContext from '../scripts/Store'
import mailFilled from '@iconify/icons-ant-design/mail-filled'
import getClosestPlaceholder from '../scripts/getClosestPlaceholder'

const animationDuration = 0.25

export const MailButton = observer(() => {
	const context = useContext(UserContext)
	const {
		placeholderXPos,
		placeholderXPosB4,
		placeholderYPos,
		placeholderYPosB4,
		isVisible
	} = context.user
	const ref = useRef(null)

	const variants = {
		visible: {
			opacity: [1, 1, 0],
			top: placeholderYPos,
			left: placeholderXPos,
		},
		notVisible: {
			borderRadius: ['2%', '5%', '50%'],
			top: placeholderYPos,
			left: placeholderXPos,
			innerWidth: 20,
			display: 'flex',
		},
	}

	return (
		<motion.div
			className={`button primary mail-button`}
			ref={ref}
			initial="visible"
			animate={isVisible ? 'visible' : 'notVisible'}
			variants={variants}
			transition={{
				duration: animationDuration,
				times: [0, 0.9, 1],
			}}
		>
			<a href='mailto:hello@orsbert.com'>
				{isVisible && 'hello@orsbert.com'}
				{!isVisible && (<Icon
					icon={mailFilled}
					style={{
						fontSize: '28px',
						margin: '0px 2.625px', // square out
					}}
				/>)}
			</a>
		</motion.div>
	)
})

let data = {}


let scrollTimer = null

// @ts-ignore
export const MailButtonPlaceholder = observer(({tag}) => {

	const ref = useRef(null)


	const context = useContext(UserContext)
	const { isVisible=false } = context.user

	
	// listen for changes in y postion change
	const { scrollYProgress } = useViewportScroll()
	useEffect(() => (
		scrollYProgress.onChange(() => {
			const { clientHeight, clientWidth } = document.documentElement
	
			const cornerPoint = {
				placeholderXPos: clientWidth - 65,
				placeholderYPos: clientHeight - 65,
			}

			const { isVisible } = context.user

			if (ref.current) {
				var rect = ref.current.getBoundingClientRect()

				// store the data
				if (!data[tag]) {
					// initialise data
					data[tag] = {}
				}
				data[tag] = {
					placeholderXPos: rect.left,
					placeholderYPos: rect.top,
				}

				// get the tag of the closest placeholder
				const closestPlaceholder = getClosestPlaceholder(data)

				const isRectInViewport = isElementInViewport(ref.current)

				if (tag === closestPlaceholder) {
					if (isRectInViewport) {
						if (isVisible === false) {  // no first timers

							const updateState = () => {
								context.setUser({
									placeholderXPos: data[closestPlaceholder].placeholderXPos,
									placeholderYPos: data[closestPlaceholder].placeholderYPos,
									placeholderXPosB4: cornerPoint.placeholderXPos,
									placeholderYPosB4: cornerPoint.placeholderYPos,
									isVisible: isRectInViewport,
								})
							}


							// since this is  a moving target, we are only doing it on scroll stop
							if (scrollTimer !== null) {
								clearTimeout(scrollTimer)
							}
							scrollTimer = setTimeout(updateState, 150)
						}
					}
					else {
						if (isVisible === undefined || isVisible === true) { // first time ?
							context.setUser({
								placeholderXPos: cornerPoint.placeholderXPos,
								placeholderYPos: cornerPoint.placeholderYPos,
								placeholderXPosB4: rect.left,
								placeholderYPosB4: rect.top,
								isVisible: isRectInViewport,
							})
						}
					}
				}

			}
		})
	), [isVisible])

	const variants = {
		visible: {
			opacity: [0, 1],
			transition: {
				duration: 0.3,
				delay: animationDuration,
			}
		},
		notVisible: {
			opacity: 0,
		},
	}

	return (
		<motion.div
			ref={ref}
			className='button primary mail-button'
			style={{
				position: 'static',
			}}
			initial={'notVisible'}
			animate={(isVisible===undefined || isVisible)? 'visible' : 'notVisible'}
			variants={variants}
		>
			hello@orsbert.com
		</motion.div>
	)
}
)