import styles from './HomeSearch.module.css';
import blueBall from '../../assets/images/blue-ball.svg';
import Button from '../UI/Button';

const HomeSearch = () => {
	return (
		<div className={styles['home__search']}>
			<div className={styles['home__search-content']}>
				<p className={styles['home__search-head']}>
					<span className={styles['home__search-head__accent']}>
						Найдите проверенного исполнителя
					</span>
					, который работал в вашей нише, с подтвержденными результатами
				</p>
				<p className={styles['home__search-text']}>
					Начните искать своего идеального <br />
					исполнителя уже сейчас
				</p>
				<Button href className={styles['home__search-button']}>
					Начать поиск
				</Button>
			</div>
			<div className={styles['home__search-image']}>
				<img src={blueBall} alt='Decorative Ball' />
			</div>
		</div>
	);
};

export default HomeSearch;
