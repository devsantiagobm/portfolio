import { BsArrowUpRight as ArrowIcon } from "react-icons/bs"
import Image from "next/image"
import { useEffect, useState } from "react"
import originalTechnologies from "data/technologies.data"
import ShowIn from "components/ShowIn"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Home() {
    const [t] = useTranslation();

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
                        <a href={t("index.resume_link")} className="button hero__resume" third="true" target="_blank" rel="noreferrer">
                            {t("index.second_button")}
                            <ArrowIcon className="hero__arrow"></ArrowIcon>
                        </a>
                    </div>
                </ShowIn>

                <div className="hero__about">
                    <div className="hero__about-column">
                        <span className="hero__about-title">
                            {t("index.about_text")}
                        </span>
                        <Link href="/profile" className="button hero__about-link"
                        >{t("index.about_button")}</Link>
                    </div>

                    <div className="hero__about-column hero__about-column--list">
                        <li className="hero__about-item">
                            <span>{t("index.from_text")}</span>
                            <span>Colombia</span>
                        </li>
                        <li className="hero__about-item">
                            <span>{t("index.location_text")}</span>
                            <span>Medellin</span>
                        </li>
                        <li className="hero__about-item">
                            <span>{t("index.age_text")}</span>
                            <span>18</span>
                        </li>
                    </div>
                </div>
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
                        <Image src="/my-image.png"
                            alt="Santiago's image" width={500} height={600} className="hero__portrait" />
                    </ShowIn>
                </picture>

                <div className="hero__tech">

                    <div className="hero__box">

                        <Ball></Ball>
                        <Ball type="second"></Ball>

                    </div>

                </div>
            </div>
        </div>
    )
}

function Ball({ type }) {
    const { t} = useTranslation()
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