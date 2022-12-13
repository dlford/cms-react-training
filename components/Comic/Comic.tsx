import Image from 'next/image';
import React from 'react';

import type { Comic } from '../../types/Comic';
import ComicDetail from '../ComicDetail';
import IconButton from '../IconButton';
import styles from './Comic.module.scss';

export interface ComicComponentProps {
	comic: Comic;
}

export default function ComicComponent({ comic }: ComicComponentProps) {
	const { thumbnail, title, issueNumber, dates, creators } = comic;

	return (
		<article className={styles.comic}>
			<Image
				className={styles.thumbnail}
				src={`${thumbnail.path.replace(
					'http://',
					'https://',
				)}.${thumbnail.extension}`}
				alt={title}
				width={183}
				height={276}
			/>
			<IconButton />
			<div className='text-content'>
				<h2>{title}</h2>
				<ComicDetail
					issueNumber={issueNumber}
					dates={dates}
					creators={creators}
				/>
			</div>
		</article>
	);
}
