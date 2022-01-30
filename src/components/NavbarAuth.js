const Menu = () => {
	return (
		<div className='menu__auth'>
			<p className='menu__auth-head'>Авторизация</p>
			<a href className='menu__auth-link__register'>
				Зарегистрироваться
			</a>
			<a href className='menu__auth-link__login'>
				Войти
			</a>
		</div>
	);
};

export default Menu;
