import {
	faBoltLightning,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './IconButton.module.scss';

export default function Button({
	icon = faBoltLightning,
	active = false,
	...rest
}: {
	icon?: IconDefinition;
	active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type='button'
			{...rest}
			className={active ? styles.active : styles.iconButton}
		>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
}
