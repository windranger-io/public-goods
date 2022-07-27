import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme/index'
import GlobalStyle from 'theme/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Public Goods — pgDAO</title>
        <meta name="title" content="Public Goods — pgDAO" />
        <meta
          name="description"
          content="Building a positive⇀︎sum world through new mechanisms for public goods."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Public Goods — pgDAO" />
        <meta property="og:title" content="Public Goods — pgDAO<" />
        <meta property="og:image" content="ABSOLUTE_URL_TO_PREVIEW_IMAGE" />
        <meta
          property="og:description"
          content="Building a positive⇀︎sum world through new mechanisms for public goods."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PGcoalition" />
        <meta name="twitter:creator" content="@PGcoalition" />
        <meta name="twitter:title" content="Public Goods — pgDAO<" />
        <meta
          name="twitter:description"
          content="Building a positive⇀︎sum world through new mechanisms for public goods."
        />
        <meta
          name="twitter:image:src"
          content="ABSOLUTE_URL_TO_PREVIEW_IMAGE"
        />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_CODE}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTM_CODE}');
        `}
      </Script>

      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
