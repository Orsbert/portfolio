const Portfolio = ({
	slug= '',
	title= '',
	thumbnail= '',
	logo= '',
	description= '',
	link= '',
	informationList= [],
	techUsed= [],
	tags = [],
}) => {
	return {
		slug,
		title,
		thumbnail,
		logo,
		description,
		link,
		informationList,
		techUsed,
		tags,
	}
}

const portfolioData = {
	'zicofe': Portfolio({
		slug: 'zicofe',
		title: 'Zicofe',
		link: 'https://zicofecafe.com/',
		thumbnail: '/images/zicofe.png',
		description: `Business website for a coffee cafe that displays offers, the menu
		a gallery, detailed history of its founding, contact information and reviews from customers`,
		informationList:[
			`On this project, I was the developer, the design was already provided from a template 
			close to the client's desires.`,
			`My work was to customise the website and add features like mailing functionality that were
			 non inclusive in the template we chose`,
			`The home page welcomes the visitor with a carousel of offers from the restaurant that slide horizontally`,
		],
		techUsed: [
			'HTML',
			'CSS - scripted with SASS',
			'PHP',
			'Javascript',
		],
		tags: [
			'css',
			'php',
			'javascript',
		],
	}),
	'nations-arise': Portfolio({
		slug: 'nations-arise',
		title: 'Nations Arise Revival Ministries',
		link: 'https://nations-arise.org/',
		thumbnail: '/images/nations_arise.png',
		description: `Christian church for born-again christians whose focus is to impact different peoples 
		lives with help from its partners and donations from the public.`,
		informationList:[
			`On this project, I was the developer, the design was already provided from a template 
			close to the client's desires.`,
			`The project was originally is in plain Html and hence content management was not possible 
			for non technical individuals like the client.`,
			`To cater for this problem, I created a wordpress theme from scratch to an exact copy of the 
			website we already had.`,
			`The home page welcomes the visitor with a carousel of information of their cause that slides horizontally.`,
			`The website collects data like newsletter subscriptions, different partnership category requests, prayer 
			requests, contact and donations. To cater for these needs, the website has more than ten forms.`,
		],
		techUsed: [
			'HTML',
			'CSS - scripted with SASS',
			'Javascript',
			'PHP',
			'Wordpress',
		],
		tags: [
			'css',
			'javascript',
			'php',
			'wordpress',
		],
	}),
	'mfrika': Portfolio({
		slug: 'mfrika',
		title: 'Mfrika',
		link: 'https://mfrika.com/',
		thumbnail: '/images/mfrika.png',
		description: `Africa is strikingly beautiful, and that is what we are focused on. Enjoying African themed 
		clothing, diverse cultures, and typical African character. All of our designs are drawn by hand by African
		fashion designers and incredibly talented artists.`,
		informationList:[
			`On this project, I was the developer, the design was already provided from a template 
			close to the client's desires.`,
			`My work was to customise the website and add features like dynamic page routing, mailing functionality that were
			non inclusive in the template we chose.`,
			`The website has insights on various tourist sites around the country with cards on the homepage`,
			`It also has insights on various projects perfomed under Mfrika sponsorship.`,
		],
		techUsed: [
			'HTML',
			'CSS - scripted with SASS',
			'Javascript',
			'PHP',
		],
		tags: [
			'css',
			'javascript',
			'php',
		],
	}),
	'kabbastore': Portfolio({
		slug: 'kabbastore',
		title: 'Kabba Store',
		link: 'https://kabbastore.com/',
		thumbnail: '/images/kabbastore.png',
		description: `Kabba Store is an online marketplace for fashion, confectioneries, electronics, and among others targeting 
		Ugandans. It is also a logistics service, which enables the shipment and delivery of packages from sellers to consumers,
		and a payment service. It has partnered with different sellers to ease your shopping life with quality in variety.`,
		informationList:[
			`On this project, I was the developer and UX designer, the client wanted a multivendor ecommerce website.`,
			`We decided to use wordpress in combination with woo commerce market place, to add multivendor capabilities built 
			on top of woo commerce plugin, as the base of the system.`,
			`The website is directly connected to the facebook and instagram page of the client hence any products added are 
			synced to the social media shops.`,
		],
		techUsed: [
			'HTML',
			'CSS - scripted with SASS',
			'Javascript',
			'PHP',
			'Wordpress',
			'Woo commerce plugin',
		],
		tags: [
			'css',
			'javascript',
			'php',
			'wordpress',
		],
	}),
}

export const portfolioDataList = Object.values(portfolioData)

export const getPortfolio = (slug) => {
	if (portfolioData[slug]) {
		return portfolioData[slug]
	}
	else {
		return null
	}
}

export const getTagsList = () => {
	const dataList = portfolioDataList
	
	let tagsList = []

	for (let index = 0; index < dataList.length; index++) {
		const { tags } = dataList[index]
		for (const i in tags) {
			if (!tagsList.includes(tags[i])) {
				tagsList.push(tags[i])
			}
		}
	}

	return tagsList
}

export default portfolioData