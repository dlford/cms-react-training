import { useState } from 'react';

export default function useMarvel() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState<any>();

	function getComics(args?: { [key: string]: string }) {
		setLoading(true);
		setError(false);

		const url = new URL(
			'/api/marvel/comics',
			window.location.origin,
		);

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
