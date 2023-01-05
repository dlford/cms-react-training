import {
	faBars,
	faBoltLightning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import useFavorites from '../../contexts/favorites';
import styles from './Nav.module.scss';

export default function Nav() {
	const { countFavorites } = useFavorites();
	const count = countFavorites();

	return (
		<div className={styles.nav}>
			<nav className={styles.mobile}>
				<ul>
					<li>
						<a href='#favorites'>
							<FontAwesomeIcon icon={faBoltLightning} />
							<span>{count > 0 ? `(${count})` : ''}</span>
						</a>
					</li>
					<li>
						<button
							aria-label='Open Menu'
							className={styles.menuBtn}
							type='button'
						>
							<FontAwesomeIcon icon={faBars} />
						</button>
					</li>
				</ul>
			</nav>
			<nav className={styles.desktop}>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/'>Shop</Link>
					</li>
					<li>
						<a href='#favorites'>
							<FontAwesomeIcon icon={faBoltLightning} />
							My Favorites
							<span>
								{count > 0 ? ` (${count})` : ''}
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
