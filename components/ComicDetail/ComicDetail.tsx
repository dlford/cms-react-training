import React from 'react';

import type { Comic } from '../../types/Comic';
import styles from './ComicDetail.module.scss';

function Label({ children }: { children: string }) {
	return <span className={styles.label}>{children}</span>;
}

export interface ComicDetailComponentProps {
	issueNumber: Comic['issueNumber'];
	publishDate: Comic['publishDate'];
	creators: Comic['creators'];
}

export default function ComicDetailComponent({
	issueNumber,
	publishDate,
	creators,
}: ComicDetailComponentProps) {
	return (
		<ul className={styles.comicDetail}>
			<li>
				<Label>Issue:</Label> {issueNumber}
			</li>
			<li>
				<Label>Published:</Label>
				<br />
				<time dateTime={new Date(publishDate).toISOString()}>
					{new Date(publishDate).toLocaleString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric',
					})}
				</time>
			</li>
			<li>
				<Label>Creators:</Label>
				<br />
				{creators.map(({ name }) => name).join(', ')}
			</li>
		</ul>
	);
}
