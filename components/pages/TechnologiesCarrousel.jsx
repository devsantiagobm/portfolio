import ShowIn from "components/ShowIn"
import technologies from "data/technologies.data"
import { useTranslation } from "react-i18next"

export default function Carrousel({ setIndexSelected }) {
    const [t] = useTranslation()

    return (
        <ShowIn className="technologies__carrousels auto-carrousel">
            <div className="auto-carrousel__track">

                {
                    [...technologies(t), ...technologies(t)].map((item, i) => {
                        const { color, name, Icon, id } = item

                        return (
                            <div key={id + name + i}
                                className="auto-carrousel__item"
                                style={{ "--custom-color": color }}
                                onClick={() => setIndexSelected(id - 1)} // Id in our list starts at 1, not at 0
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