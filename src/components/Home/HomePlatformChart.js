import styles from './HomePlatformChart.module.css';

const HomePlatformChart = ({ head, text, image, imageClass }) => {
	return (
		<div className={styles['home-platform-chart']}>
			<div className={styles['home-platform-chart__text-container']}>
				<p className={styles['home-platform-chart__text-head']}>{head}</p>
				<p className={styles['home-platform-chart__text-desc']}>{text}</p>
			</div>
			<div className={styles['home-platform-chart__image-container']}>
				<img
					className={
						styles['home-platform-chart__image'] + ' ' + styles[imageClass]
					}
					src={image}
					alt='Chart about platform'
				/>
			</div>
		</div>
	);
};

export default HomePlatformChart;
