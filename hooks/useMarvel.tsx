import { useState } from 'react';

import useFilter from '../contexts/filter';
import type { GetComicsResponse } from '../types/GetComicsResponse';

type MarvelData = GetComicsResponse;

export default function useMarvel() {
	const { creatorFilter, characterFilter } = useFilter();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState<MarvelData>();

	function getComics(args?: { [key: string]: string }) {
		setLoading(true);
		setError(false);

		let url = new URL('/api/marvel/comics', window.location.origin);

		if (creatorFilter) {
			url = new URL(
				`/api/marvel/creators/${creatorFilter}/comics`,
				window.location.origin,
			);
		}

		if (characterFilter) {
			url = new URL(
				`/api/marvel/characters/${characterFilter}/comics`,
				window.location.origin,
			);
		}

		if (args) {
			Object.entries(args).forEach(([key, value]) => {
				url.searchParams.append(key, String(value));
			});
		}

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				if (!res.success || !res.payload?.data) {
					setError(true);
					setLoading(false);
					return;
				}
				setData(res.payload.data);
				setLoading(false);
			})
			.catch(() => {
				setError(true);
				setLoading(false);
			});
	}

	return {
		loading,
		error,
		data,
		getComics,
	};
}
