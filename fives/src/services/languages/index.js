import axios from 'axios';
import { baseUrl } from '../../constants';

export const getActiveLanguages = async () => {
  try {
    const res = await axios.get(`${baseUrl}/es/json/active_languages`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
