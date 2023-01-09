import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../../assets/logo.svg';
import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Image
				className={styles.logo}
				src={logo}
				alt=''
				aria-hidden='true'
				width={106}
				height={106}
			/>
			<ul>
				<li>
					<Link href='/'>Privacy Policy</Link>
				</li>
				<li>
					<Link href='/'>Terms of Service</Link>
				</li>
			</ul>
			<p>
				Copyright {new Date().getFullYear()}. Comic Closet, LLC.
				All rights reserved.
			</p>
			<p>Data provided by Marvel. © 2014 Marvel</p>
		</footer>
	);
}
