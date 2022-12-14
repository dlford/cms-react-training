/* eslint-disable prefer-destructuring */

export const MARVEL_BASE_URL = 'https://gateway.marvel.com/v1/public';
export const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY || '';
export const MARVEL_SECRET_KEY = process.env.MARVEL_SECRET_KEY || '';
export { default as CHARACTER_FILTERS } from './filters/characters.json';
export { default as CREATOR_FILTERS } from './filters/creators.json';
