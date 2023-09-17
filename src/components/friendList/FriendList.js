import { FriendListItem } from "components/friendListItem/FriendListItem"
import PropTypes from 'prop-types';


export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend=> (
                <li key={friend.id}
                className="item">
                        <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                        />
                </li>
        ))}
        </ul>

)}

FriendListItem.propTypes={
    friends: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
    }),
    ),
};


