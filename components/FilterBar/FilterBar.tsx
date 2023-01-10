import {
	faBoltLightning,
	faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import useFilter from '../../contexts/filter';
import FavoritesList from '../FavoritesList';
import FilterDropdowns from '../FilterDropdowns';
import styles from './FilterBar.module.scss';

const buttonNames = {
	filterButton: 'filterButton',
	favoritesButton: 'favoritesButton',
};

export default function FilterBar() {
	const { characterFilter, creatorFilter } = useFilter();

	const [filterOpen, setFilterOpen] = useState(false);
	const [favoritesOpen, setFavoritesOpen] = useState(false);
	const [overlayOpen, setOverlayOpen] = useState(false);

	const overlayClass = React.useCallback(() => {
		return overlayOpen
			? styles.mobileOverlay
			: styles.mobileOverlayClosed;
	}, [overlayOpen])();

	function toggleOverlay(e: React.UIEvent<HTMLButtonElement>) {
		switch (e.currentTarget.name) {
			case buttonNames.filterButton:
				if (filterOpen) {
					setFilterOpen(false);
					setOverlayOpen(false);
				} else {
					setFilterOpen(true);
					setFavoritesOpen(false);
					setOverlayOpen(true);
				}
				break;
			case buttonNames.favoritesButton:
				if (favoritesOpen) {
					setFavoritesOpen(false);
					setOverlayOpen(false);
				} else {
					setFavoritesOpen(true);
					setFilterOpen(false);
					setOverlayOpen(true);
				}
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		setFilterOpen(false);
		setFavoritesOpen(false);
		setOverlayOpen(false);
	}, [characterFilter, creatorFilter]);

	return (
		<section className={styles.filterbar}>
			<div className={styles.mobile}>
				<button
					type='button'
					name={buttonNames.filterButton}
					onClick={toggleOverlay}
				>
					Filter <FontAwesomeIcon icon={faFilter} />
				</button>
				<button
					type='button'
					name={buttonNames.favoritesButton}
					onClick={toggleOverlay}
				>
					Show Favorites{' '}
					<FontAwesomeIcon icon={faBoltLightning} />
				</button>
			</div>
			<div className={overlayClass}>
				{filterOpen && <FilterDropdowns />}
				{favoritesOpen && <FavoritesList />}
			</div>
			<div className={styles.desktop}>
				<FilterDropdowns />
			</div>
		</section>
	);
}
