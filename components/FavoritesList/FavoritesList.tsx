import { faClose } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import React from 'react';

import useFavorites from '../../contexts/favorites';
import IconButton from '../IconButton';
import styles from './FavoritesList.module.scss';

export default function FavoritesList() {
	const { favorites, removeFavorite } = useFavorites();

	return (
		<div className={styles.favorites}>
			<h2 className={styles.title}>Favorites</h2>
			{favorites.map((comic) => (
				<article
					className={styles.comic}
					key={comic.id}
				>
					<div className={styles.imgCont}>
						<Image
							src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
							alt={comic.title}
							width={183}
							height={276}
						/>
						<IconButton
							aria-label={`Remove from favorites: ${comic.title}`}
							icon={faClose}
							onClick={() => removeFavorite(comic)}
						/>
					</div>
					<div className={styles.textContent}>
						<h3>{comic.title}</h3>
						<p>Issue: {comic.issueNumber}</p>
					</div>
				</article>
			))}
		</div>
	);
}
