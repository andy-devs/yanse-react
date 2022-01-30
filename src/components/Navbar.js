import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/images/yanse-logo.svg';

const Navbar = () => {
	return (
		<div className='menu__nav'>
			<p className='menu__nav-head'>Меню</p>
			<ul className='menu__nav-list'>
				<li>
					<a href className='menu__nav-link'>
						<img
							src='./img/category-logo.svg'
							alt
							className='menu__nav-link__logo'
						/>
						Главная
					</a>
				</li>
				<li>
					<a href className='menu__nav-link'>
						<img
							src='./img/graph-logo.svg'
							alt
							className='menu__nav-link__logo'
						/>
						О платформе
					</a>
				</li>
				<li>
					<a href className='menu__nav-link'>
						<img
							src='./img/three-users-logo.svg'
							alt
							className='menu__nav-link__logo'
						/>
						Подрядчикам
					</a>
				</li>
				<li>
					<a href className='menu__nav-link'>
						<img
							src='./img/two-users-logo.svg'
							alt
							className='menu__nav-link__logo'
						/>
						Заказчикам
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
