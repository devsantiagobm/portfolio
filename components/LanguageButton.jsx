import { useTranslation } from "react-i18next"
import UsaFlag from "public/button-icons/united-states.png"
import SpainFlag from "public/button-icons/spain.png"
import { useRef } from "react"
import Image from "next/image"

export default function LanguageButton() {
    const [t, i18n] = useTranslation()
    const $tracker = useRef()

    function handleChangeLanguage(e) {
        const dataset = e.currentTarget.dataset.language

        if (dataset === "en") {
            i18n.changeLanguage("en")
            $tracker.current.classList.add("language-button__tracker--english")

        }
        else {
            i18n.changeLanguage("es")
            $tracker.current.classList.remove("language-button__tracker--english")
        }
    }

    return (
        <div className="language-button">

            <div className="language-button__box">
                <div className="language-button__tracker" ref={$tracker}></div>
                <span className="language-button__text" data-language="es" onClick={handleChangeLanguage}>
                    <Image src={SpainFlag.src} alt="Spain Flag" className="language-button__icon" width={16} height={16}/>
                    Español
                </span>
                <span className="language-button__text" data-language="en" onClick={handleChangeLanguage}>
                    <Image src={UsaFlag.src} alt="English Flag" className="language-button__icon" width={16} height={16} />
                    English
                </span>
            </div>
        </div>
    )
}