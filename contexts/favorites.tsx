import React, { createContext, useMemo } from 'react';

import useLocalState from '../hooks/useLocalState';
import { Comic } from '../types/Comic';

export const favoritesContext = createContext({
	favorites: [] as Comic[],
	addFavorite: (_comic: Comic) => {},
	removeFavorite: (_comic: Comic) => {},
	checkIfFavorite: (_comic: Comic): boolean => false,
	countFavorites: (): number => 0,
});

export function FavoritesProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [favorites, setFavorites] = useLocalState<Comic[]>({
		key: 'favorites',
		defaultValue: [],
	});

	function addFavorite(comic: Comic) {
		setFavorites((prev) => [...prev, comic]);
	}

	function removeFavorite(comic: Comic) {
		setFavorites((prev) =>
			prev.filter((item) => item.id !== comic.id),
		);
	}

	function checkIfFavorite(comic: Comic) {
		return favorites.some((item) => item.id === comic.id);
	}

	function countFavorites() {
		return favorites.length;
	}

	const value = useMemo(
		() => ({
			favorites,
			addFavorite,
			removeFavorite,
			checkIfFavorite,
			countFavorites,
		}),
		[favorites], // eslint-disable-line react-hooks/exhaustive-deps
	);

	return (
		<favoritesContext.Provider value={value}>
			{children}
		</favoritesContext.Provider>
	);
}

export default function useFavorites() {
	return React.useContext(favoritesContext);
}
