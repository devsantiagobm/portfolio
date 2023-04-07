import ShowIn from "components/ShowIn"
import Image from "next/image"


export default function Project({ project, setSelectedId, setSelected,  }) {
    const { name, description, image } = project

    function setSelectedProject() {
        setSelectedId(name);
        setSelected(project)
    }

    return (
        <ShowIn className="projects__item" layoutId={name} onClick={setSelectedProject}>
            <picture className="projects__picture">
                <Image src={`/project-images/${image}`}
                    alt={name + "project image"}
                    className="projects__image"
                    width={565}
                    height={375} />
            </picture>

            <div className="projects__information">
                <div className="projects__data">
                    <span className="projects__name">{name}</span>
                    <span className="projects__description">{description}</span>
                </div>
            </div>
        </ShowIn >
    )
}