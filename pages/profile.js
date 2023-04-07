import { BsAsterisk as AsteriskIcon } from "react-icons/bs"
import profile from "data/profile.data"
import ShowIn from "components/ShowIn"

export default function Profile() {
    return (
        <ShowIn className="profile">
            <div className="profile__column">
                <h2 className="profile__title title">Profile</h2>
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