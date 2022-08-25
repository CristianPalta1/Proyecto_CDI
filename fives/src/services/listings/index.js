import axios from 'axios';
import { baseUrl } from '../../constants';
axios.defaults.timeout = 6000;

export const getBlockTypes = async () => {
  try {
    const res = await axios.get(`${baseUrl}/json/block-types`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getFirstBlockListingPages = async (language_code, block_type) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/block-listings?type=${block_type}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
