import type { Creator } from './Creator';

export type Comic = {
	id: number;
	title: string;
	issueNumber: number;
	dates: [{ type: string; date: string }];
	creators: {
		items: Creator[];
	};
	thumbnail: {
		extension: string;
		path: string;
	};
};
