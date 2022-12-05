import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/karla/400.css';
import '@fontsource/karla/700.css';

import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
