/**
 * 
 * is element currently seen
 * 
 * origin from
 * https://stackoverflow.com/a/7557433/13875111
 * 
 */


export default function isElementInViewport(el) {

	const rect = el.getBoundingClientRect()

	return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
	)
}