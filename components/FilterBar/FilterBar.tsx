import {
	faBoltLightning,
	faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import styles from './FilterBar.module.scss';

function FilterDropdowns() {
	return <div>FilterDropdowns</div>;
}

export default function FilterBar() {
	const [filterOpen, setFilterOpen] = useState(false);
	const [favoritesOpen, setFavoritesOpen] = useState(false);

	return (
		<>
			<section className={styles.mobile}>
				<button
					type='button'
					onClick={() => setFilterOpen((prev) => !prev)}
				>
					Filter <FontAwesomeIcon icon={faFilter} />
				</button>
				<button
					type='button'
					onClick={() => setFavoritesOpen((prev) => !prev)}
				>
					Show Favorites{' '}
					<FontAwesomeIcon icon={faBoltLightning} />
				</button>
			</section>
			<section className={styles.mobileOverlay}>
				{filterOpen && <FilterDropdowns />}
				{favoritesOpen && <div>Favorites</div>}
			</section>
			<section className={styles.desktop}>
				<FilterDropdowns />
			</section>
		</>
	);
}
