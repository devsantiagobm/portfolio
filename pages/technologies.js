import originalTechnologies from "data/technologies.data"
import { motion } from "framer-motion"
import ShowIn from "components/ShowIn"
import { useState } from "react"
import TechnologiesTable from "components/pages/TechnologiesTable"
import { useTranslation } from "react-i18next"
import { useRef } from "react"

export default function Technologies() {
    const [t] = useTranslation();
    const technologies = originalTechnologies(t)
    const [indexSelected, setIndexSelected] = useState(0)
    const informationBox = useRef(null)

    return (
        <div className="technologies">
            <ShowIn className="technologies__initial">
                <h2 className="title">{t("technologies.title")}</h2>
                <span className="subtitle">{t("technologies.subtitle")}</span>
            </ShowIn>

            <div className="technologies__main">
                <TechnologiesTable setIndexSelected={setIndexSelected} informationBox={informationBox}></TechnologiesTable>
                <TechInformation selected={technologies[indexSelected]} informationBox={informationBox} />
            </div>

        </div >
    )
}


function TechInformation({ selected, informationBox }) {
    const { Icon, name, description, color, information } = selected

    return (
        <motion.div className="technologies__information" ref={informationBox}>
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


function MotionAnimate(props) {

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

    return (
        <motion.div {...props}
            variants={informationVariants}
            initial="hide"
            animate="visible"
            transition="transition">
            {props.children}
        </motion.div>
    )
}