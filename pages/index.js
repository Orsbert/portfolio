import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { PortfolioList } from '../components/PortfolioList'

export default function Home() {

	return (
		<>
			<Head>
				<title>Orsbert Ayesigye - Designs, develops, tests, deploys and monitors web-based applications.</title>
				<meta name="description" content="Portfolio for Orsbert Ayesigye" />
				<link rel="icon" href="/dp_tiny.png" />
				<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
			</Head>
			<Nav/>
			<Header/>
			<PortfolioList/>
			<Footer />
		</>
  )
}
