import { promises as fs } from 'fs';

export const GetPopularPlacesData = async () => {
  // TODO: fetch data from server
  const data = await fs.readFile('./data/popular-places.data.json', 'utf8');
  return JSON.parse(data);
}