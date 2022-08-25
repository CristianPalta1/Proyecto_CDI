import axios from 'axios';
import { baseUrl } from '../../constants';
axios.defaults.timeout = 6000;

export const getBasicPages = async (language_code = 'en', page_type) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/page-type?type=${page_type}`);
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};