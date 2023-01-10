import React, { createContext, useMemo, useState } from 'react';

export const filterContext = createContext({
	characterFilter: undefined as number | undefined,
	setCharacterFilter: (_value: number | undefined) => {},
	creatorFilter: undefined as number | undefined,
	setCreatorFilter: (_value: number | undefined) => {},
});

export function FilterProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [characterFilter, setCharacterFilterValue] = useState<
		number | undefined
	>();
	const [creatorFilter, setCreatorFilterValue] = useState<
		number | undefined
	>();

	function setCharacterFilter(value: number | undefined) {
		setCreatorFilterValue(undefined);
		setCharacterFilterValue(value);
	}

	function setCreatorFilter(value: number | undefined) {
		setCharacterFilterValue(undefined);
		setCreatorFilterValue(value);
	}

	const value = useMemo(
		() => ({
			characterFilter,
			setCharacterFilter,
			creatorFilter,
			setCreatorFilter,
		}),
		[characterFilter, creatorFilter],
	);

	return (
		<filterContext.Provider value={value}>
			{children}
		</filterContext.Provider>
	);
}

export default function useFilter() {
	return React.useContext(filterContext);
}
