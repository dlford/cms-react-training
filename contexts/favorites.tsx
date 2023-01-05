import React, { createContext, useMemo, useState } from 'react';

import { Comic } from '../types/Comic';

export const favoritesContext = createContext({
	favorites: [] as Comic[],
	addFavorite: (_comic: Comic) => {},
	removeFavorite: (_comic: Comic) => {},
	isFavorite: (_comic: Comic): boolean => false,
	countFavorites: (): number => 0,
});

export function FavoritesProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [favorites, setFavorites] = useState<Comic[]>([]);

	function addFavorite(comic: Comic) {
		setFavorites((prev) => [...prev, comic]);
	}

	function removeFavorite(comic: Comic) {
		setFavorites((prev) =>
			prev.filter((item) => item.id !== comic.id),
		);
	}

	function isFavorite(comic: Comic) {
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
			isFavorite,
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
