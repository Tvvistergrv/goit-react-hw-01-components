import { FriendListItem } from "components/friendListItem/FriendListItem"



export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            <FriendListItem
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}/>
        </ul>
)
}
