import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const Statistics = ({ title = "", stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.stat_list}>
                {stats.map(item => (
                    <li className={styles.item} key={item.id} style={{ backgroundColor: getRandomColor() }}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}%</span>
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

function getRandomColor() {
    let color = function () {
        return Math.floor(Math.random() * 256);
    };
    return "rgb(" + color() + "," + color() + "," + color() + ")";
}

export default Statistics;