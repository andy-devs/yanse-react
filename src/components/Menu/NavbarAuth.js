import styles from './NavbarAuth.module.css';

const Menu = () => {
	return (
		<div className={styles['auth']}>
			<p className={styles['auth-head']}>Авторизация</p>
			<a href className={styles['auth-link__register']}>
				Зарегистрироваться
			</a>
			<a href className={styles['auth-link__login']}>
				Войти
			</a>
		</div>
	);
};

export default Menu;
