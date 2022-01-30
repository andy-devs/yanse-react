import styles from './ButtonSmall.module.css';

const ButtonSmall = ({ children, href, className }) => {
	return (
		<a href={href} className={styles.buttonSmall + ' ' + className}>
			{children}
		</a>
	);
};

export default ButtonSmall;
