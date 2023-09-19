import { FriendListItem } from "components/friendListItem/FriendListItem"
import PropTypes from 'prop-types';
import css from '../friendList/FriendList.module.css'


export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend=> (
                <li key={friend.id}
                className={css.item}>
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


