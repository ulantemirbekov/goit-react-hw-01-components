import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.jpg';
import styles from './Profile.module.css';


const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt={"Аватар " + name}
                    className={styles.avatar}
                />
                <p className="name">{name}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.stats_item}>
                    <span className="label">Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li className={styles.stats_item}>
                    <span className="label">Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li className={styles.stats_item}>
                    <span className="label">Likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.defaultProps = {
    avatar: defaultAvatar,
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: {
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }
};

export default Profile;