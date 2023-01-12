import React, {
	createContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

import useLocalState from '../hooks/useLocalState';
import { Comic } from '../types/Comic';

export const favoritesContext = createContext({
	favorites: [] as Comic[],
	addFavorite: (_comic: Comic) => {},
	removeFavorite: (_comic: Comic) => {},
	checkIfFavorite: (_comic: Comic): boolean => false,
	isMaxedOut: false,
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

	const [isMaxedOut, setIsMaxedOut] = useState<boolean>(false);

	function addFavorite(comic: Comic) {
		if (!isMaxedOut) {
			setFavorites((prev) => [...prev, comic]);
		}
	}

	function removeFavorite(comic: Comic) {
		setFavorites((prev) =>
			prev.filter((item) => item.id !== comic.id),
		);
	}

	function checkIfFavorite(comic: Comic) {
		return favorites.some((item) => item.id === comic.id);
	}

	useEffect(() => {
		if (favorites.length >= 10) {
			setIsMaxedOut(true);
		} else {
			setIsMaxedOut(false);
		}
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, [favorites]);

	const value = useMemo(
		() => ({
			favorites,
			addFavorite,
			removeFavorite,
			checkIfFavorite,
			isMaxedOut,
		}),
		[favorites, isMaxedOut], // eslint-disable-line react-hooks/exhaustive-deps
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
