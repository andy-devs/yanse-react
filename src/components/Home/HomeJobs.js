import styles from './HomeJobs.module.css';
import JobCard from '../UI/JobCard';
import targetMarketing from '../../assets/images/target-marketing.jpg';
import targetMarketingIcon from '../../assets/images/target-marketing-icon.svg';

const HomeJobs = () => {
	const jobs = [
		{
			image: targetMarketing,
			title: 'Таргетированная реклама',
			icon: targetMarketingIcon,
			description:
				'более 50 проверенных исполнителей в нише бьюти, строительстве и...',
			buttonText: 'Искать',
		},
	];

	return (
		<div className={styles['home__jobs']}>
			<h2 className={styles['home__jobs-head']}>
				Зарегистрируйтесь, чтобы попробовать платформу
			</h2>
			<div className={styles['home__jobs-grid']}>
				{jobs.map((job) => (
					<JobCard
						image={job.image}
						title={job.title}
						icon={job.icon}
						description={job.description}
						buttonText={job.buttonText}
					/>
				))}
			</div>
		</div>
	);
};

export default HomeJobs;
