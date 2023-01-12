import Image from 'next/image';
import React from 'react';

import useFavorites from '../../contexts/favorites';
import type { Comic } from '../../types/Comic';
import ComicDetail from '../ComicDetail';
import IconButton from '../IconButton';
import styles from './Comic.module.scss';

export interface ComicComponentProps {
	comic: Comic;
}

export default function ComicComponent({ comic }: ComicComponentProps) {
	const { thumbnail, title, issueNumber, dates, creators } = comic;

	const { checkIfFavorite, addFavorite, removeFavorite, isMaxedOut } =
		useFavorites();

	function toggleFavorite() {
		if (checkIfFavorite(comic)) {
			removeFavorite(comic);
		} else {
			addFavorite(comic);
		}
	}

	return (
		<article className={styles.comic}>
			<div className={styles.imgCont}>
				<Image
					className={styles.thumbnail}
					src={`${thumbnail.path.replace(
						'http://',
						'https://',
					)}.${thumbnail.extension}`}
					alt={title}
					width={183}
					height={276}
				/>
				<div className={styles.button}>
					<IconButton
						disabled={isMaxedOut && !checkIfFavorite(comic)}
						aria-label={`${
							checkIfFavorite(comic)
								? 'Remove from'
								: 'Add to'
						} favorites: ${comic.title}`}
						active={checkIfFavorite(comic)}
						onClick={toggleFavorite}
					/>
				</div>
			</div>
			<div className={styles.textContent}>
				<h2>{title}</h2>
				<ComicDetail
					issueNumber={issueNumber}
					dates={dates}
					creators={creators}
				/>
			</div>
		</article>
	);
}
