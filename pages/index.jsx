import Head from 'next/head'
import Converter from 'components/converter'

const WEBSITE_TITLE = 'Webconvert'
const WEBSITE_DESCRIPTION = 'PX to REM Converter'
const WEBSITE_OG_IMAGE_PATH = '/webconvert.png'
const WEBSITE_URL = 'https://haikhalfakhreez.github.io/webconvert/'

export default function Home() {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE}</title>
        <meta name="description" content={WEBSITE_DESCRIPTION} />
        <meta name="keywords" content="px to rem converter" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={WEBSITE_URL} />
        <meta property="og:title" content={WEBSITE_TITLE} />
        <meta property="og:description" content={WEBSITE_DESCRIPTION} />
        <meta property="og:image" content={WEBSITE_OG_IMAGE_PATH} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={WEBSITE_TITLE} />
        <meta name="twitter:description" content={WEBSITE_DESCRIPTION} />
        <meta name="twitter:site" content="@ekaliacid" />
        <meta name="twitter:creator" content="@ekaliacid" />
        <meta name="twitter:image" content={WEBSITE_OG_IMAGE_PATH} />
        <meta name="twitter:alt" content={WEBSITE_TITLE} />

        <link rel="canonical" href={WEBSITE_URL} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Converter />
    </>
  )
}
