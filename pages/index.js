import { BsArrowUpRight as ArrowIcon } from "react-icons/bs"
import Image from "next/image"
import { useEffect, useState } from "react"
import originalTechnologies from "data/technologies.data"
import ShowIn from "components/ShowIn"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Home() {
    const { t, i18n: { language } } = useTranslation();



    return (
        <div className="hero" id="home">
            <div className="hero__main">
                <ShowIn className="hero__information">
                    <h1 className="hero__title">
                        <div className="hero__title-first-line">
                            {t("index.first_title")}
                            <span className="hero__job">
                                {t("index.profession")}
                            </span>
                        </div>
                        Santiago
                    </h1>

                    <div className="hero__description">
                        {t("index.description")}
                        <span className="bold">{t("index.bold_description")}</span>
                    </div>


                    <div className="hero__buttons">
                        <Link href="/profile" className="button">
                            {t("index.first_button")}
                        </Link>
                        <a href={language === "es" ? "/santiago_barrera_cv.pdf" : "/santiago_barrera_cv-english.pdf"} className="button hero__resume" third="true" target="_blank" rel="noreferrer">
                            {t("index.second_button")}
                            <ArrowIcon className="hero__arrow"></ArrowIcon>
                        </a>
                    </div>
                </ShowIn>

            </div>

            <div className="hero__image">
                <ShowIn className="hero__image-title">
                    <div>
                        {t("index.image_text")}
                        <span className="bold--title bold">{t("index.image_text_bold")}</span>
                    </div>
                </ShowIn>
                <picture className="hero__picture">
                    <ShowIn>
                        <img src="/my-image.png" alt="Santiago's image" className="hero__portrait" />
                    </ShowIn>
                </picture>

                <div className="hero__tech">
                    <div className="hero__box">
                        <Ball />
                        <Ball type="second" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Ball({ type }) {
    const { t } = useTranslation()
    const technologies = originalTechnologies(t)
    const firstIndex = type === "second" ? 1 : 0
    const [balls, setBalls] = useState([technologies[firstIndex]])
    const techLength = technologies.length

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * ((techLength - 1) - 0 + 1) + 0)
            setBalls([technologies[randomIndex]])
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    return balls.map(({ Icon, color }) => (
        <span
            key={color}
            className={`hero__ball ${type === "second" && "hero__ball--second"}`}
            style={{
                "--duration": (Math.floor(Math.random() * (90 - 60 + 1) + 60)) / 10 + "s",
                "--color": color
            }}>
            <Icon></Icon>
        </span>
    ))

}