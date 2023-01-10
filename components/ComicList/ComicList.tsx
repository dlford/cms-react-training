import React, { useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

import useFilter from '../../contexts/filter';
import useMarvel from '../../hooks/useMarvel';
import { Comic } from '../../types/Comic';
import ComicComponent from '../Comic';
import FilterBar from '../FilterBar';
import styles from './ComicList.module.scss';

export default function ComicList() {
	const { loading, error, data, getComics } = useMarvel();
	const { characterFilter, creatorFilter } = useFilter();

	const loadingBar = useRef<LoadingBarRef>(null);

	useEffect(() => {
		getComics();
	}, [
		characterFilter,
		creatorFilter,
	]); /* eslint-disable-line react-hooks/exhaustive-deps */

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
		<section>
			<LoadingBar
				color='#C24868'
				ref={loadingBar}
			/>
			<FilterBar />
			<div
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
			</div>
		</section>
	);
}
