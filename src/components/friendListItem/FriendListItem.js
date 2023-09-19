import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from '../friendListItem/FriendListItem.module.css'



export const FriendListItem = ({avatar, name, isOnline}) => {
    const colorIsOnLine = isOnline ? css.status : css.statusRed;
    return (
        <Fragment>
            <span className={colorIsOnLine}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </Fragment>
        
        
    )
    
}


FriendListItem.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}