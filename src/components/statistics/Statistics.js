import css from '../statistics/Statistics.module.css'
import PropTypes from 'prop-types';




export const Statistics = ({title, stats}) => {
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
    return (
<section className={css.statistics}>
  {title.length>0 && <h2 className={css.title}>{title}</h2>}
      
  <ul 
    className={css.statList}>
    {stats.map(el => 
        <li 
        key={el.id}
        className={css.item} style={{background:generateColor()}}>
          
      <span className={css.label}>{el.label}</span>
      <span className={css.percentage}>{el.percentage} %</span>
    </li>
  )}
  </ul>

</section>
    )
};

// {[styles.base, styles.clickable, styles.withIcon].join(' ')}




Statistics.propTypes={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}),
),
}