import { MailButton } from '../components/MailButton'
import '../scss/globals.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../scripts/gtag'
import Script from 'next/script'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {

	const router = useRouter()

	useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
			/>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
			<MailButton/>
		</>
	)
}

export default MyApp
