import styles from './HomeReg.module.css';
import Button from '../UI/Button';

const HomeReg = () => {
	return (
		<div className={styles['home-reg']}>
			<div className={styles['home-reg__head']}>
				<h3 className={styles['home-reg__head-text']}>
					Вы исполнитель и ищите клиентов? Находите проекты в нишах, с которыми
					уже работали
				</h3>
				<div className={styles['home-reg__head-images']}></div>
			</div>
			<p className={styles['home-reg__description']}>
				Хотите, чтобы не вы вечно искали проекты, а вас находили заказчики? И не
				приходилось постоянно каждому доказывать, что вы хороший специалист?
				Тогда регистрируйтесь на нашей платформе – она сделает все за вас!
			</p>
			<Button href className={styles['home-reg__button']}>
				Зарегистрироваться
			</Button>
		</div>
	);
};

export default HomeReg;
