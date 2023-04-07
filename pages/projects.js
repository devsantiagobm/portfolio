import { AiOutlineLink as LinkIcon } from "react-icons/ai"
import ShowIn from "components/ShowIn"
import projects from "data/projects.data"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Project from "components/pages/Project"
import { AiFillGithub as GithubIcon } from "react-icons/ai"

export default function Projects() {
    const [selectedId, setSelectedId] = useState(null)
    const [selected, setSelected] = useState(null)

    return (
        <div className="projects">
            <ShowIn className="projects__initial">
                <div className="title">Santiago's  Projects</div>
                <div className="subtitle">Personal projects i worked on</div>
            </ShowIn>

            <div className="projects__grid">
                {
                    projects.map(project => (
                        <Project key={project.name}
                            project={project}
                            setSelectedId={setSelectedId}
                            setSelected={setSelected}/>)
                    )
                }
            </div>


            <AnimatePresence>
                {
                    selected && <Modal
                        selected={selected}
                        setSelected={setSelected}
                        selectedId={selectedId} />
                }
            </AnimatePresence>

        </div>
    )
}


function Modal({ selected, setSelected, selectedId }) {
    const { name, description, image, technologies, github, link } = selected

    return (
        <div className="projects__modal">
            <motion.div className="projects__modal-background" onClick={() => setSelected(null)} exit={{ opacity: 0}}/>
            <motion.div layoutId={selectedId} className="projects__modal-box" transition={{ duration: .7 }}>
                <picture className="projects__modal-picture">
                    <Image src={`/project-images/${image}`} 
                    width={560} height={350} className="projects__modal-image" 
                    alt={"Project image"}/>
                </picture>
                <div className="projects__modal-row">
                    <h3>{name}</h3>
                    <p className="projects__modal-description">{description}</p>


                    <div className="projects__modal-links" >
                        <a className="button" href={"https://github.com/santiago220506/" + github} secondary="true" target={"_blank"}>
                            <GithubIcon></GithubIcon>
                            Github
                        </a>
                        <a className="button" href={link} secondary="true" target={"_blank"}>
                            <LinkIcon></LinkIcon>
                            Visit</a>
                    </div>

                    <ul className="projects__modal-list">
                        {
                            technologies.map(({ name, Icon, color }) => (
                                <li className="projects__modal-icon" style={{ "--color-icon": color }} title={name} key={name}>
                                    <Icon/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}