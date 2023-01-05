import Image from 'next/image';
import React from 'react';

import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';
import Nav from './Nav';

export default function Header() {
	return (
		<header className={styles.header}>
			<Image
				className={styles.logo}
				src={logo}
				alt=''
				aria-hidden='true'
				width={106}
				height={106}
			/>
			<Nav />
		</header>
	);
}
