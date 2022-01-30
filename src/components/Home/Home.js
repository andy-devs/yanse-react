import styles from './Home.module.css';
import HomeAuth from './HomeAuth';
import HomeSearch from './HomeSearch';

const Home = () => {
	return (
		<div className={styles['home']}>
			<HomeAuth />
			<HomeSearch />
			<div className='mainpage__data'>
				<div className='mainpage__data-col'>
					<span className='mainpage__data-col__num'>120</span>
					<p className='mainpage__data-col__text'>
						заказчиков перешли в коммуникацию с исполнителями
					</p>
					<div className='mainpage__data-col__line'>
						<div className='line__blue' />
					</div>
				</div>
				<div className='mainpage__data-col'>
					<span className='mainpage__data-col__num'>104</span>
					<p className='mainpage__data-col__text'>
						выверенных исполнителя размещены на платформе
					</p>
					<div className='mainpage__data-col__line'>
						<div className='line__green' />
					</div>
				</div>
				<div className='mainpage__data-col'>
					<span className='mainpage__data-col__num'>101</span>
					<p className='mainpage__data-col__text'>
						заказчиков вчера оставило отклик на исполнителя
					</p>
					<div className='mainpage__data-col__line'>
						<div className='line__red' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
