import styles from './HomeReg.module.css';
import Button from '../UI/Button';
import greenGuy from '../../assets/images/green-guy-icon.svg';
import yellowGuy from '../../assets/images/yellow-guy-icon.svg';
import purpleGuy from '../../assets/images/purple-guy-icon.svg';

const HomeReg = () => {
	return (
		<div className={styles['home-reg']}>
			<div className={styles['home-reg__head']}>
				<h3 className={styles['home-reg__head-text']}>
					Вы исполнитель и ищите клиентов? Находите проекты в нишах, с которыми
					уже работали
				</h3>
				<div className={styles['home-reg__head-images']}>
					<img
						className={
							styles['home-reg__head-images__item'] +
							' ' +
							styles['first-image']
						}
						src={greenGuy}
						alt='green guy icon'
					/>
					<img
						className={
							styles['home-reg__head-images__item'] +
							' ' +
							styles['second-image']
						}
						src={yellowGuy}
						alt='yellow guy icon'
					/>
					<img
						className={
							styles['home-reg__head-images__item'] +
							' ' +
							styles['third-image']
						}
						src={purpleGuy}
						alt='purple guy icon'
					/>
				</div>
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
