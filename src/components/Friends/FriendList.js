import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem {...friend} />
            ))}
        </ul>
    );
};

export default FriendList;