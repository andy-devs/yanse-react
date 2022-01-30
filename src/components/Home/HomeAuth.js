import styles from './HomeAuth.module.css';
import { Link } from 'react-router-dom';

const HomeAuth = () => {
	return (
		<div className={styles['home__login']}>
			<p className={styles['home__login-text']}>
				Платформа, где можно найти подрядчика <br />
				специализирующегося на вашей нише
			</p>
			<div className={styles['home__login-links']}>
				<Link to='/login' className={styles['home__login-links__client']}>
					Войти как заказчик
				</Link>
				<Link to='/login' className={styles['home__login-links__worker']}>
					Войти как подрядчик
				</Link>
			</div>
		</div>
	);
};

export default HomeAuth;
