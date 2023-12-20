import {promises as fs} from 'fs';

export const GetHeroSpotData = async() => {
  // TODO: fetch data from server
  const data = await fs.readFile('./data/hero-spot.data.json', 'utf8');
  return JSON.parse(data);
}