import Image from 'next/image';
import React from 'react';

import heroImg from '../../assets/hero.png';
import heroTexture from '../../assets/hero-texture.png';
import styles from './Hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<Image
				className={styles.heroImg}
				src={heroImg}
				alt=''
				aria-hidden='true'
				width={1920}
				height={867}
			/>
			<Image
				className={styles.heroTexture}
				src={heroTexture}
				alt=''
				aria-hidden='true'
				width={1920}
				height={235}
			/>
			<div className={styles.content}>
				<h1>Comic Closet</h1>
			</div>
		</section>
	);
}
