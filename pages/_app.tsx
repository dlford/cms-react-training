import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/900.css';
import '@fontsource/karla/400.css';
import '@fontsource/karla/700.css';
import '../styles/global.scss';

import type { AppProps } from 'next/app';
import React from 'react';

import { FavoritesProvider } from '../contexts/favorites';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<FavoritesProvider>
			<Component {...pageProps} />
		</FavoritesProvider>
	);
}
