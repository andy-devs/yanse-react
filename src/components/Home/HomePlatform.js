import React from 'react';
import HomePlatformChart from './HomePlatformChart';
import Button from '../UI/Button';

import styles from './HomePlatform.module.css';

import YanseLogo from '../../assets/images/yanse-logo.svg';
import FreeImage from '../../assets/images/free-image.svg';
import WorkerChartImage from '../../assets/images/worker-chart-image.svg';
import ClientChartImage from '../../assets/images/client-chart-image.svg';

const HomePlatform = () => {
	const charts = [
		{
			head: 'free',
			text: 'платформа дает возможность для заказчиков связаться с 5 исполнителями',
			image: FreeImage,
			imageClass: 'firstImage',
		},
		{
			head: '100+',
			text: 'выверенных исполнителей уже размещены на платформе',
			image: WorkerChartImage,
			imageClass: 'secondImage',
		},
		{
			head: '54',
			text: 'заказчика уже нашли исполнителя под свой проект',
			image: ClientChartImage,
			imageClass: 'thirdImage',
		},
	];

	return (
		<React.Fragment>
			<h2 className={styles['home-platform__heading-text']}>О платформе</h2>
			<div className={styles['home-platform']}>
				<div className={styles['home-platform__head']}>
					<img
						className={styles['home-platform__head-logo']}
						src={YanseLogo}
						alt='Yanse Logo.'
					/>
					<p className={styles['home-platform__head-text']}>
						Это платформа, на которой заказчик сможет найти практически
						идеального подрядчика, который работал с его нишей и имеет в ней
						твердые результаты.{' '}
					</p>
				</div>
				<div className={styles['home-platform__charts']}>
					{charts.map((chart) => (
						<HomePlatformChart
							head={chart.head}
							text={chart.text}
							image={chart.image}
							imageClass={chart.imageClass}
							key={chart.head}
						/>
					))}
				</div>
				<Button className={styles['home-platform__button']}>
					Больше о платформе
				</Button>
			</div>
		</React.Fragment>
	);
};

export default HomePlatform;
