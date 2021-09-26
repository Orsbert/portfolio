import { MailButton } from '../components/MailButton'
import '../scss/globals.scss'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<MailButton/>
		</>
	)
}

export default MyApp
