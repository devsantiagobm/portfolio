import ShowIn from "components/ShowIn"
import technologies from "data/technologies.data"

export default function Carrousel({ setSelected }) {
    return (
        <ShowIn className="technologies__carrousels auto-carrousel">
            <div className="auto-carrousel__track">

                {
                    [...technologies, ...technologies].map((item, i) => {
                        const { color, name, Icon, id } = item

                        return (
                            <div key={id + name + i}
                                className="auto-carrousel__item"
                                style={{ "--custom-color": color }}
                                onClick={() => setSelected(item)}
                            >
                                <Icon className="auto-carrousel__icon"></Icon>
                                <span className="auto-carrousel__name">{name} </span>
                            </div>
                        )
                    })
                }

            </div>

        </ShowIn>

    )
}