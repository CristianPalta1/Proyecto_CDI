import axios from 'axios';
import { baseUrl } from '../../constants';


export const getBlogPress = async (language_code = 'en') => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/blog-press-room`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSpecificBlogPressData = async (language_code = 'en', id_blog) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/press-room/${id_blog}`);
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};