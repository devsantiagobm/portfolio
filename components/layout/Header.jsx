import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router";
import { HiMenuAlt3 as MenuIcon } from "react-icons/hi"
import { MdClose as CloseIcon } from "react-icons/md"
import { useTranslation } from "react-i18next";

export default function Header() {
    const headerRef = useRef(null)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const { pathname } = useRouter()
    const [t] = useTranslation();


    useEffect(() => {
        const screenWidth = window.screen.width
        setIsLargeScreen(screenWidth > 872)
    }, [])



    const links = [
        {
            name: t("header.links.home"),
            link: "/"
        },
        {
            name: t("header.links.projects"),
            link: "/projects"
        },
        {
            name: t("header.links.technologies"),
            link: "/technologies"
        },
        {
            name: t("header.links.profile"),
            link: "/profile"
        },
        {
            name: t("header.links.faq"),
            link: "/faq"
        },
    ]


    return (
        <header className="header" ref={headerRef}>
            <span className="header__title">
                <span>Santiago</span>
                <span className="header__dot">.</span>
            </span>

            {
                isLargeScreen && 
                (
                    <>
                        <nav className="header__nav">
                            <ul className="header__list">
                                {
                                    links.map(({ name, link }) => (
                                        <li
                                            className={`header__item ${pathname === link && "header__item--active"}`}
                                            key={name}>
                                            <Link href={link}>{name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>

                        <Link className="button" secondary="true" href="/contact">{t("header.button")}</Link>
                    </>
                )
            }

            {
                !isLargeScreen && (
                    <>
                        <nav className={`header__nav ${isNavOpen && "header__nav--open"}`}>
                            <ul className="header__list">
                                {
                                    links.map(({ name, link }) => (
                                        <li
                                            className={`header__item ${pathname === link && "header__item--active"}`}
                                            key={name}>
                                            <Link href={link} onClick={() => setIsNavOpen(false)}>{name}</Link>
                                        </li>
                                    ))
                                }
                                <Link className="button header__talk" secondary="true" href="/contact" onClick={() => setIsNavOpen(false)}>{t("header.button")}</Link>

                            </ul>
                            <CloseIcon className="header__close" onClick={() => setIsNavOpen(false)} />
                        </nav>

                        <MenuIcon className="header__open" onClick={() => setIsNavOpen(true)} />
                    </>
                )
            }
        </header>
    )
}