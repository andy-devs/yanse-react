import React, { useState } from 'react';
import styles from './Menu.module.css';
import logo from '../assets/images/yanse-logo.svg';
import Navbar from './Navbar';
import NavbarAuth from './NavbarAuth';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<div className={styles['menu-container']}>
				<div className={styles['menu__logo']}>
					<img
						src={logo}
						alt='Yanse Logo'
						className={styles['menu__logo-image']}
					/>
				</div>
				<Navbar />
				<NavbarAuth />
			</div>
		</div>
	);
};

export default Menu;
