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

	console.log(placeholderXPos, placeholderYPos)

	const variants = {
		visible: {
			opacity: [1, 1, 0],
			top: placeholderYPos,
			left: placeholderXPos,
		},
		notVisible: {
			borderRadius: ['2%','50%'],
			top: placeholderYPos,
			left: placeholderXPos,
		},
	}

	return (
		<motion.div
			className={`button primary mail-button`}
			ref={ref}
			// initial="visible"
			animate={isVisible ? 'visible' : 'notVisible'}
			variants={variants}
			transition={{duration: animationDuration}}
		>
			{isVisible && 'hello@orsbert.com'}
			{!isVisible && <Icon icon={mailFilled} style={{fontSize: '28px'}} />}
		</motion.div>
	)
})

let data = {}

let prevInView = null
let placeholderXPos = null
let placeholderYPos = null
let scrollTimer = null

// @ts-ignore
export const MailButtonPlaceholder = observer(({tag}) => {

	const ref = useRef(null)


	const context = useContext(UserContext)
	const { isVisible } = context.user

	
	// listen for changes in y postion change
	const { scrollYProgress } = useViewportScroll()
	useEffect(() => {

		const { clientHeight, clientWidth } = document.documentElement

		const cornerPoint = {
			placeholderXPos: clientWidth - 60,
			placeholderYPos: clientHeight*0.95 - 20
		}
		scrollYProgress.onChange(() => {

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
						if (isVisible === undefined || isVisible === false) { // first time ?

							const updateState = () => {
								console.log('scroll stopped closestPlaceholder->', closestPlaceholder)

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
	}, [isVisible])

	const variants = {
		visible: {
			opacity: 1,
		},
		notVisible: {
			opacity: [1, 0],
			transition:{delay: animationDuration,}
		},
	}

	return (
		<motion.div
			ref={ref}
			className='button primary mail-button'
			style={{
				position: 'static',
			}}
			initial={'visible'}
			animate={(isVisible===undefined || isVisible)? 'visible' : 'notVisible'}
			variants={variants}
		>
			hello@orsbert.com
		</motion.div>
	)
}
)