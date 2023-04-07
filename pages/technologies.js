import technologies from "data/technologies.data"
import { motion } from "framer-motion"
import ShowIn from "components/ShowIn"
import { useState } from "react"
import TechnologiesCarrousel from "components/pages/TechnologiesCarrousel"

export default function Technologies() {
    const [selected, setSelected] = useState(technologies[0])

    return (
        <div className="technologies">
            <ShowIn className="technologies__initial">
                <h2 className="title">Technologies</h2>
                <span className="subtitle"> Amount of technologies that i use every day as <span className="bold">developer</span> </span>
            </ShowIn>

            
            <TechnologiesCarrousel setSelected={setSelected}></TechnologiesCarrousel>
            <TechInformation selected={selected} />

        </div >
    )
}


function TechInformation({ selected }) {
    const { Icon, name, description, color, information } = selected

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