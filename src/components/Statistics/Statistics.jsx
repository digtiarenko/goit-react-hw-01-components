import PropTypes from 'prop-types';
import s from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : ''}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          const color =
            'rgb(' +
            getRandomInt(0, 255) +
            ', ' +
            getRandomInt(0, 255) +
            ', ' +
            getRandomInt(0, 255) +
            ')';

          return (
            <li
              key={id}
              style={{ backgroundColor: `${color}` }}
              className={s.item}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired,
  ),
};

export default Statistics;
