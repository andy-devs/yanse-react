import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import homeLogo from '../../assets/images/home-logo.svg';
import aboutLogo from '../../assets/images/about-logo.svg';
import workerLogo from '../../assets/images/worker-logo.svg';
import clientLogo from '../../assets/images/client-logo.svg';

const Navbar = () => {
	const links = [
		{
			name: 'Главная',
			to: '/',
			icon: homeLogo,
		},
		{
			name: 'О платформе',
			to: '/about',
			icon: aboutLogo,
		},
		{
			name: 'Подрядчикам',
			to: '/worker',
			icon: workerLogo,
		},
		{
			name: 'Заказчикам',
			to: '/client',
			icon: clientLogo,
		},
	];

	return (
		<div className={styles['nav']}>
			<p className={styles['nav-head']}>Меню</p>
			<div className={styles['nav-list']}>
				{links.map((link) => {
					return (
						<Link to={link.to} className={styles['nav-link']} key={link.name}>
							<img
								src={link.icon}
								alt='Link Icon'
								className={styles['nav-link__logo']}
							/>
							{link.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
