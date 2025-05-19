import ShowIn from "components/ShowIn"
import technologies from "data/technologies.data"

import { useTranslation } from "react-i18next"

export default function Carrousel({ indexSelected,setIndexSelected, informationBox }) {
    const [t] = useTranslation()


    function handleOnClick(id) {
        setIndexSelected(id);
        
        if(screen.width <= 872){
            const top = informationBox.current.getBoundingClientRect().top + window.scrollY;
            window.scroll({ top, behavior: 'smooth' });
        }
        
    }


    return (
        <ShowIn className="technologies__table tech-table">
            <div className="tech-table__box">

                {
                    [...technologies(t)].map((item, i) => {
                        const { color, name, Icon, id } = item

                        return (
                            <div key={id + name + i}
                                className={`tech-table__item ${indexSelected === i && "tech-table__item--selected"}`}
                                style={{ "--custom-color": color }}
                                onClick={() => handleOnClick(i)} // Id in our list starts at 1, not at 0
                            >
                                <Icon className="tech-table__icon"></Icon>
                                <span className="tech-table__name">{name} </span>
                            </div>
                        )
                    })
                }

            </div>

        </ShowIn>

    )
}