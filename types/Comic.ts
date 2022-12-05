import type { Creator } from './Creator';

export type Comic = {
	id: number;
	title: string;
	issueNumber: number;
	publishDate: string;
	creators: Creator[];
	thumbnail: string;
};
