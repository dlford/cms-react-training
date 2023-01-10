import React from 'react';

import useFilter from '../../contexts/filter';
import characterFilters from '../../data/filters/characters.json';
import creatorFilters from '../../data/filters/creators.json';
import styles from './FilterDropdowns.module.scss';

const characterFilterId = 'characterFilter';
const creatorFilterId = 'creatorFilter';

function toNumberOrUndefined(value: string) {
	return !Number.isNaN(+value) ? +value : undefined;
}

export default function FilterDropdowns() {
	const {
		characterFilter,
		creatorFilter,
		setCharacterFilter,
		setCreatorFilter,
	} = useFilter();

	return (
		<article className={styles.dropdowns}>
			<span>Filter by:</span>
			<label
				htmlFor={characterFilterId}
				className='sr-only'
			>
				Filter by Character
			</label>
			<select
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setCharacterFilter(
						toNumberOrUndefined(e.currentTarget.value),
					)
				}
				id={characterFilterId}
				value={characterFilter || ''}
			>
				<option value=''>Character</option>
				{characterFilters.map((filter) => (
					<option
						key={filter.id}
						value={filter.id}
					>
						{filter.name}
					</option>
				))}
			</select>
			<label
				htmlFor={creatorFilterId}
				className='sr-only'
			>
				Filter by Creator
			</label>
			<select
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setCreatorFilter(
						toNumberOrUndefined(e.currentTarget.value),
					)
				}
				id={creatorFilterId}
				value={creatorFilter || ''}
			>
				<option value=''>Creator</option>
				{creatorFilters.map((filter) => (
					<option
						key={filter.id}
						value={filter.id}
					>
						{filter.name}
					</option>
				))}
			</select>
		</article>
	);
}
