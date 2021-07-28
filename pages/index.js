import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {

	return (
		<>
			<Head>
				<title>Orsbert Ayesigye - Designs, develops, tests, deploys and monitors web-based applications.</title>
				<meta name="description" content="Portfolio for Orsbert Ayesigye" />
				<link rel="icon" href="/dp.png" />
				<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
			</Head>
			<Header/>
		</>
  )
}
