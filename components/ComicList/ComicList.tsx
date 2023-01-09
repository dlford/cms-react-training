import React, { useEffect } from 'react';

import useMarvel from '../../hooks/useMarvel';
import { Comic } from '../../types/Comic';
import ComicComponent from '../Comic';
import FilterBar from '../FilterBar';
import styles from './ComicList.module.scss';

export default function ComicList() {
	const { loading, error, data, getComics } = useMarvel();

	useEffect(() => {
		getComics();
	}, []); /* eslint-disable-line react-hooks/exhaustive-deps */

	return (
		<section>
			<FilterBar />
			<div className={styles.comics}>
				{loading && <p>Loading...</p>}
				{error && <p>Error</p>}
				{!loading &&
					!error &&
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
