import React from 'react';

import type { Comic } from '../../types/Comic';
import styles from './ComicDetail.module.scss';

function Label({ children }: { children: string }) {
	return <span className={styles.label}>{children}</span>;
}

export interface ComicDetailComponentProps {
	issueNumber: Comic['issueNumber'];
	dates: Comic['dates'];
	creators: Comic['creators'];
}

export default function ComicDetailComponent({
	issueNumber,
	dates,
	creators,
}: ComicDetailComponentProps) {
	const pubDate = dates.find(({ type }) => type === 'onsaleDate');

	return (
		<ul className={styles.comicDetail}>
			<li>
				<Label>Issue:</Label> {issueNumber}
			</li>
			<li>
				<Label>Published:</Label>
				<br />
				{!!pubDate?.date && (
					<time
						dateTime={new Date(pubDate.date).toISOString()}
					>
						{new Date(pubDate.date).toLocaleString(
							'en-US',
							{
								month: 'long',
								day: 'numeric',
								year: 'numeric',
							},
						)}
					</time>
				)}
			</li>
			<li>
				<Label>Creators:</Label>
				<br />
				{!!creators.items.length &&
					creators.items.map(({ name }) => name).join(', ')}
			</li>
		</ul>
	);
}
