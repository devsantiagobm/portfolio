import { BsAsterisk as AsteriskIcon } from "react-icons/bs"
import originalProfile from "data/profile.data"
import ShowIn from "components/ShowIn"
import { useTranslation } from "react-i18next"

export default function Profile() {
    const [t] = useTranslation()
    const profile = originalProfile(t)

    return (
        <ShowIn className="profile">
            <div className="profile__column">
                <h2 className="profile__title title">{t("profile.title")}</h2>
            </div>


            <div className="profile__column">
                {
                    profile.map(item => <ProfileItem item={item} key={item.id} />)
                }
            </div>
        </ShowIn>
    )
}


function ProfileItem({item}) {
    const { name, description} = item
    return (
        <div className="profile__item">
            <AsteriskIcon className="profile__asterisk"></AsteriskIcon>
            <span className="profile__subtitle"> {name} </span>
            <p className="profile__paragraph">{ description }</p>
        </div>
    )
}