import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router";
import { HiMenuAlt3 as MenuIcon} from "react-icons/hi"
import {MdClose as CloseIcon} from "react-icons/md"

export default function Header() {
    const headerRef = useRef(null)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const { pathname } = useRouter()


    useEffect(() => {
        const screenWidth = window.screen.width
        setIsLargeScreen(screenWidth > 872)
    }, [])


    return (
        <header className="header" ref={headerRef}>
            <span className="header__title">
                <span>Santiago</span>
                <span className="header__dot">.</span>
            </span>

            {
                isLargeScreen && (
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


                        <Link className="button" secondary="true" href="/contact">Let's talk</Link>
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
                                            key={name}
                                            onClick={() => setIsNavOpen(false)}>
                                            <Link href={link}>{name}</Link>
                                        </li>
                                    ))
                                }
                                <Link className="button header__talk" secondary="true" href="/contact">Let's talk</Link>

                            </ul>
                            <CloseIcon className="header__close" onClick={() => setIsNavOpen(false)} />
                        </nav>

                        <MenuIcon className="header__open" onClick={() => setIsNavOpen(true)}/>
                    </>
                )
            }
        </header>
    )
}


const links = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Technologies",
        link: "/technologies"
    },
    {
        name: "Profile",
        link: "/profile"
    },
    {
        name: "FAQ",
        link: "/faq"
    },
]