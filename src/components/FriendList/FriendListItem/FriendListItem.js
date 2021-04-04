import PropTypes from 'prop-types';
import defaultAvatar from '../../Profile/defaultAvatar.jpg';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar = "", name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt={"Аватар " + name} width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

FriendListItem.defaultProps = {
    avatar: defaultAvatar,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;