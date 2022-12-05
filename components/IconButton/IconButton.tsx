import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './IconButton.module.scss';

export default function Button() {
	return (
		<button
			className={styles.iconButton}
			type='button'
		>
			<FontAwesomeIcon icon={faBoltLightning} />
		</button>
	);
}
