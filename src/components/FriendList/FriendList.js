import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {

    return (
        <ul className={styles.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default FriendList;