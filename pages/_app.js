import '../styles/globals.css'
import Header from 'components/layout/Header'
import Head from 'next/head'
import i18next from 'i18next'
import { I18nextProvider } from "react-i18next"
import languagesConfiguration from "locales/configuration";
import LanguageButton from 'components/LanguageButton'
import { manrope } from "fonts/Manrope.font";
import { poppins } from "fonts/Poppins.font";

i18next.init(languagesConfiguration)

export default function App({ Component, pageProps }) {

    return (
        <>
            <I18nextProvider i18n={i18next}>
                <Head>
                    <title>Santiago Barrera | Portfolio</title>
                    <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
                    <meta name="description" content="Explora el portafolio de Santiago Barrera Muñoz, un apasionado desarrollador web fullstack junior. Descubre su dedicación a través de proyectos que reflejan aprendizaje, creatividad y compromiso. Sumérgete en el mundo en evolución del desarrollo web a medida que Santiago da vida a sitios y aplicaciones con habilidad y entusiasmo" />
                    <meta name="keywords" content="Desarrollador web junior, Fullstack, Portafolio, Sitios web, Aplicaciones web, Tecnología, React, Aprendizaje, Desarrollo frontend, Desarrollo backend, HTML, CSS, JavaScript, Proyectos web, Santiago Barrera Muñoz" />
                </Head>


                <div className={manrope.variable + " " + poppins.variable + " content"}>


                    <Header />
                    <Component {...pageProps} />
                    <LanguageButton></LanguageButton>

                </div>
            </I18nextProvider>
        </>
    )
}