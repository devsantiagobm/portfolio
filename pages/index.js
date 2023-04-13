import { BsArrowUpRight as ArrowIcon } from "react-icons/bs"
import Image from "next/image"
import { useEffect, useState } from "react"
import technologies from "data/technologies.data"
import ShowIn from "components/ShowIn"
import Link from "next/link"

export default function Home() {

    return (
        <div className="hero" id="home">
            <div className="hero__main">
                <ShowIn className="hero__information">
                    

                    <h1 className="hero__title">
                        <div className="hero__title-first-line">
                            Hi! I am
                            <span className="hero__job">Developer</span>
                        </div>
                        Santiago
                    </h1>

                    <div className="hero__description">
                        Building quality products as a
                        <span className="bold"> frontend developer</span>
                    </div>

                    
                    <div className="hero__buttons">
                        <Link href="/profile" className="button">
                            Profile
                        </Link>
                        <a href="/cv_english_santiago_barrera.pdf" className="button hero__resume" third="true" target="_blank">
                            Resume
                            <ArrowIcon className="hero__arrow"></ArrowIcon>
                        </a>
                    </div>
                </ShowIn>

                <div className="hero__about">
                    <div className="hero__about-column">
                        <span className="hero__about-title">
                            About me
                        </span>
                        <Link href="/profile" className="button hero__about-link"
                        >Know More</Link>
                    </div>

                    <div className="hero__about-column hero__about-column--list">
                        <li className="hero__about-item">
                            <span>From</span>
                            <span>Colombia</span>
                        </li>
                        <li className="hero__about-item">
                            <span>Location</span>
                            <span>Medellin</span>
                        </li>
                        <li className="hero__about-item">
                            <span>Age</span>
                            <span>18</span>
                        </li>
                    </div>
                </div>
            </div>

            <div className="hero__image">
                <ShowIn className="hero__image-title">
                    <div>
                        Let's Create your product with
                        <span className="bold--title bold">
                            {" "}
                            the best technologies
                        </span>
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