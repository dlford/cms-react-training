import React from 'react';

import styles from './Intro.module.scss';

export default function Intro() {
	return (
		<section className={styles.intro}>
			<div className={styles.heading}>
				<h2>
					<span className={styles.tag}>New Comics!</span>
					<br />
					Coming Out Daily
				</h2>
			</div>
			<p>
				Sed posuere consectetur est at lobortis. Nulla vitae
				elit libero, a pharetra augue. Cum sociis natoque
				penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Nullam id dolor id nibh ultricies
				vehicula ut id elit.
			</p>
		</section>
	);
}
