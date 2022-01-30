import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../../assets/images/yanse-logo.svg';
import Navbar from './Navbar';
import NavbarAuth from './NavbarAuth';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<div className={styles['menu__logo']}>
				<img
					src={logo}
					alt='Yanse Logo'
					className={styles['menu__logo-image']}
				/>
			</div>
			<Router>
				<Navbar />
			</Router>
			<NavbarAuth />
		</div>
	);
};

export default Menu;
