import styles from './HomeStats.module.css';

const HomeStats = () => {
	return (
		<div className={styles['home__stats']}>
			<div className={styles['home__stats-col']}>
				<span className={styles['home__stats-col__num']}>120</span>
				<p className={styles['home__stats-col__text']}>
					заказчиков перешли в коммуникацию с исполнителями
				</p>
				<div className={styles['home__stats-col__line']}>
					<div className={styles['line__blue']} />
				</div>
			</div>
			<div className={styles['home__stats-col']}>
				<span className={styles['home__stats-col__num']}>104</span>
				<p className={styles['home__stats-col__text']}>
					выверенных исполнителя размещены на платформе
				</p>
				<div className={styles['home__stats-col__line']}>
					<div className={styles['line__green']} />
				</div>
			</div>
			<div className={styles['home__stats-col']}>
				<span className={styles['home__stats-col__num']}>101</span>
				<p className={styles['home__stats-col__text']}>
					заказчиков вчера оставило отклик на исполнителя
				</p>
				<div className={styles['home__stats-col__line']}>
					<div className={styles['line__red']} />
				</div>
			</div>
		</div>
	);
};

export default HomeStats;
