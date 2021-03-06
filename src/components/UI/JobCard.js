import styles from './JobCard.module.css';
import Button from './Button';

const JobCard = ({ image, icon, title, description, buttonText }) => {
	return (
		<div className={styles['job-card']}>
			<img className={styles['job-card__image']} src={image} alt={title} />
			<h3 className={styles['job-card__title']}>
				<img
					className={styles['job-card__icon']}
					src={icon}
					alt={`icon for ${title}`}
				/>
				{title}
			</h3>
			<p className={styles['job-card__description']}>{description}</p>
			<Button href className={styles['job-card__button']}>
				{buttonText}
			</Button>
		</div>
	);
};

export default JobCard;
