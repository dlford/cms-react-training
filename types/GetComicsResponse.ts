import type { Comic } from './Comic';

export interface GetComicsResponse {
	count: number;
	limit: number;
	offset: number;
	results: Comic[];
	total: number;
}
