import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title = "", stats }) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}

            <ul className={styles.stat_list}>
                {stats.map(item => (
                    <li className={styles.stat_item} key={item.id}>
                        <span className="label">{item.label}</span>
                        <span className={styles.item_percentage}>{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Statistics;