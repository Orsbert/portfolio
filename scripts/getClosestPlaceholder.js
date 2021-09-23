/**
 * @param {{ [s: string]: any; } | ArrayLike<any>} data
 */
export default function getClosestPlaceholder(data) {

	const { clientHeight } = document.documentElement

	const dataArray = Object.values(data)

	// make list of differeces
	let dataArrayDiffs = []
	dataArray.map((tagData) => {
		dataArrayDiffs.push(diff(tagData.placeholderYPos, clientHeight))
	})

	// get the minimum difference
	const indexClosest = dataArrayDiffs.indexOf(Math.min.apply(null, dataArrayDiffs))

	// return tag
	return Object.keys(data)[indexClosest]

}

function diff (num1, num2) {
  if (num1 > num2) {
    return num1 - num2
  } else {
    return num2 - num1
  }
}