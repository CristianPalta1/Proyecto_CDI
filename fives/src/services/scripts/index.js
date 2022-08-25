import axios from 'axios';
import { baseUrl } from '../../constants';


export const getScripts = async (language_code = 'en') => {
    try {
      const res = await axios.get(`${baseUrl}/${language_code}/json/script`);
      return res.data[0];
    } catch (error) {
      console.error(error);
    }
};