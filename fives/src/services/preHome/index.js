import axios from 'axios';
import { baseUrl } from '../../constants';

export const getPreHome = async (language_code = 'en', type, id_hotel) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/pre-home?type=${type}&id_hotel=${id_hotel}`
    );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getPreHomeByType = async (language_code = 'en', type) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/pre-home?type=${type}`
    );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};
