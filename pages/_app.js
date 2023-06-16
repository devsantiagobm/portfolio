import '../styles/globals.css'
import Header from 'components/layout/Header'
import Head from 'next/head'
import i18next from 'i18next'
import { I18nextProvider } from "react-i18next"
import languagesConfiguration from "locales/configuration";
import { useTranslation } from "react-i18next"
import LanguageButton from 'components/LanguageButton'


i18next.init( languagesConfiguration)


export default function App({ Component, pageProps }) {


    return (
        <>
            <I18nextProvider i18n={i18next}>
                <Head>
                    <title>Santiago Barrera | Portfolio</title>
                    <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
                </Head>

                <div className="content">


                    <Header />
                    <Component {...pageProps} />   
                    <LanguageButton></LanguageButton>                 

                </div>
            </I18nextProvider>
        </>
    )
}