import axios from 'axios';
import { baseUrl } from '../../constants';
axios.defaults.timeout = 6000;

export const getHome = async (language_code = 'en') => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/home`);
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};
