import { render, screen } from '@testing-library/react';
import React from 'react';

import { Comic } from '../../types/Comic';
import ComicComponent from './Comic';

describe('ComicComponent', () => {
	it('should render', () => {
		const comic: Comic = {
			id: 1,
			title: 'Dummy Comic',
			issueNumber: 783928374,
			dates: [
				{
					type: 'onsaleDate',
					date: '2021-01-01T00:00:00-0500',
				},
			],
			creators: {
				items: [
					{
						name: 'John Doe',
						role: 'writer',
						resourceURI:
							'http://gateway.marvel.com/v1/public/creators/1',
					},
				],
			},
			thumbnail: {
				path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73',
				extension: 'jpg',
			},
		};

		render(<ComicComponent comic={comic} />);
		expect(
			screen.getByRole('heading', { name: /Dummy Comic/i }),
		).toBeInTheDocument();
		expect(screen.getByText(/783928374/i)).toBeInTheDocument();
		expect(
			screen.getByText(/December 31, 2020/i),
		).toBeInTheDocument();
		expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
	});
});
