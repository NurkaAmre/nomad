import {promises as fs} from 'fs';

export const GetTourData = async() => {
  // TODO: fetch data from server
  const data = await fs.readFile('./data/tour.data.json', 'utf8');
  return JSON.parse(data);
}