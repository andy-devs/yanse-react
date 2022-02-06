import styles from './Home.module.css';
import HomeAuth from './HomeAuth';
import HomeSearch from './HomeSearch';
import HomeStats from './HomeStats';
import HomeJobs from './HomeJobs';
import HomeReg from './HomeReg';
import HomePlatform from './HomePlatform';

const Home = () => {
	return (
		<div className={styles['home']}>
			<HomeAuth />
			<HomeSearch />
			<HomeStats />
			<HomeJobs />
			<HomeReg />
			<HomePlatform />
		</div>
	);
};

export default Home;
