import axios from 'axios';
import { baseUrl } from '../../constants';

export default async function handler(req, res) {
  try {
    const { locale } = req.query;
    const response = await axios.get(
      `${baseUrl}/en/json/restaurants`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
}
