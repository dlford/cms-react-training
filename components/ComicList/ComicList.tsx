import React, { useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

import useFilter from '../../contexts/filter';
import useMarvel from '../../hooks/useMarvel';
import { Comic } from '../../types/Comic';
import ComicComponent from '../Comic';
import FavoritesList from '../FavoritesList';
import FilterBar from '../FilterBar';
import styles from './ComicList.module.scss';

export default function ComicList() {
	const { loading, error, data, getComics } = useMarvel();
	const { characterFilter, creatorFilter } = useFilter();

	const loadingBar = useRef<LoadingBarRef>(null);

	useEffect(() => {
		getComics();
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, [characterFilter, creatorFilter]);

	useEffect(() => {
		if (loadingBar.current) {
			if (loading) {
				loadingBar.current.continuousStart();
			} else {
				loadingBar.current.complete();
			}
		}
	}, [loading, loadingBar]);

	return (
		<>
			<LoadingBar
				color='#C24868'
				ref={loadingBar}
			/>
			<section className={styles.list}>
				<div className={styles.listInner}>
					<div className={styles.comicsOuter}>
						<FilterBar />
						<article
							aria-busy={loading}
							className={styles.comics}
						>
							{error && <p>Error</p>}
							{!error &&
								!!data?.results &&
								data.results.map((comic: Comic) => (
									<ComicComponent
										key={comic.id}
										comic={comic}
									/>
								))}
						</article>
					</div>
					<div className={styles.favoritesOuter}>
						<FavoritesList />
					</div>
				</div>
			</section>
		</>
	);
}
