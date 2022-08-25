import axios from 'axios';
import { baseUrl } from '../../constants';

export default async function handler(req, res) {
  try {
    const { locale } = req.query;
    const response = await axios.get(`${baseUrl}/${locale}/json/sponsor`);
    return res.status(200).json(response.data[0]);
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
}
