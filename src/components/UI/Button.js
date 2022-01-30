import styles from './Button.module.css';

const Button = ({ children, href, className }) => {
	return (
		<a href={href} className={styles.button + ' ' + className}>
			{children}
		</a>
	);
};

export default Button;
