import '../styles/globals.css'
import Header from 'components/layout/Header'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Santiago Barrera | Portfolio</title>
                <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
            </Head>

            <div className="content">


                <Header />
                <Component {...pageProps} />

            </div>
        </>
    )
}