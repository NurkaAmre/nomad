import {promises as fs} from 'fs';

export const GetAllFaqData = async() => {
  // TODO: fetch data from server
  const data = await fs.readFile('./data/faq.data.json', 'utf8');
  return JSON.parse(data);
}