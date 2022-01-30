import styles from './NavbarAuth.module.css';
import Button from '../UI/Button';

const Menu = () => {
	return (
		<div className={styles['auth']}>
			<p className={styles['auth-head']}>Авторизация</p>
			<Button href className={styles['auth-link__register']}>
				Зарегистрироваться
			</Button>
			<Button href className={styles['auth-link__login']}>
				Войти
			</Button>
		</div>
	);
};

export default Menu;
