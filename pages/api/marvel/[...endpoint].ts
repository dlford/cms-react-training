import crypto from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
	MARVEL_BASE_URL,
	MARVEL_PUBLIC_KEY,
	MARVEL_SECRET_KEY,
} from '../../../data/constants';
import type { ApiResponse } from '../../../types/ApiResponse';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ApiResponse<unknown>>,
) {
	const { endpoint, ...params } = req.query;
	if (!endpoint || !endpoint.length) {
		return res.status(400).json({
			success: false,
			message: 'Missing endpoint',
		});
	}

	const route =
		typeof endpoint === 'string' ? endpoint : endpoint.join('/');

	if (!MARVEL_PUBLIC_KEY || !MARVEL_SECRET_KEY) {
		return res.status(500).json({
			success: false,
			message: 'Missing Marvel API keys',
		});
	}

	const url = new URL(`/v1/public/${route}`, MARVEL_BASE_URL);

	const now = new Date();
	const timestamp =
		now.getTime() + now.getTimezoneOffset() * 60 * 1000;

	const hash = crypto
		.createHash('md5')
		.update(`${timestamp}${MARVEL_SECRET_KEY}${MARVEL_PUBLIC_KEY}`)
		.digest('hex');

	url.searchParams.append('ts', String(timestamp));
	url.searchParams.append('apikey', MARVEL_PUBLIC_KEY);
	url.searchParams.append('hash', hash);

	Object.entries(params).forEach(([key, value]) => {
		url.searchParams.append(key, String(value));
	});

	const response = await fetch(url.toString());

	if (!response.ok) {
		return res.status(500).json({
			success: false,
			message: 'Error fetching data',
		});
	}

	const data = await response.json();

	return res.status(200).json({
		success: true,
		payload: data,
	});
}
