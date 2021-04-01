import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className="item">
            <span className="status"></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

export default FriendListItem;