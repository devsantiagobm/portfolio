'use client'

import originalTechnologies from "data/technologies.data"
import { motion } from "framer-motion"
import ShowIn from "components/ShowIn"
import { useState } from "react"
import TechnologiesCarrousel from "components/pages/TechnologiesCarrousel"
import { useTranslation } from "react-i18next"

export default function Technologies() {
    const [t] = useTranslation();
    const technologies = originalTechnologies(t)
    const [indexSelected, setIndexSelected] = useState(0)

    const filteredArray = technologies.map(tech => {
        return {
            information: tech.information,
            description: tech.description
        }
    })

    console.log(filteredArray);

    return (
        <div className="technologies">
            <ShowIn className="technologies__initial">
                <h2 className="title">{t("technologies.title")}</h2>
                <span className="subtitle">{t("technologies.subtitle")}</span>
            </ShowIn>


            <TechnologiesCarrousel setIndexSelected={setIndexSelected}></TechnologiesCarrousel>
            <TechInformation selected={technologies[indexSelected]} />

        </div >
    )
}


function TechInformation({ selected }) {
    const { Icon, name, description, color, information } = selected
    const [t, i18n] = useTranslation("technologies");

    return (
        <motion.div className="technologies__information">
            <motion.div className="technologies__information-box">
                <div className="technologies__column">
                    <MotionAnimate className="technologies__sticky" key={name}>

                        <div className="technologies__main-data">
                            <Icon className="technologies__icon" style={{ "--custom-color": color }} />
                            <span className="technologies__name">{name}</span>
                        </div>

                        <div className="technologies__description">
                            {description}
                        </div>
                    </MotionAnimate>
                </div>

                <MotionAnimate className="technologies__column" key={name}>
                    {
                        information.map(({ title, content }) => (
                            <div className="technologies__paragraph" key={title}>
                                <span className="title technologies__question" small="true">{title + name + "?"}</span>
                                <p className="technologies__explanation">{content} </p>
                            </div>
                        ))
                    }
                </MotionAnimate>

            </motion.div>
        </motion.div>
    )
}



const informationVariants = {
    hide: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    transition: {
        duration: .5
    }
}


function MotionAnimate(props) {
    const { children } = props;
    return (
        <motion.div {...props}
            variants={informationVariants}
            initial="hide"
            animate="visible"
            transition="transition">
            {children}
        </motion.div>
    )
}