import axios from 'axios';
import { baseUrl } from '../../constants';
axios.defaults.timeout = 6000;

export const getDestinations = async (language_code = 'en') => {
  
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/destinations`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
