import axios from 'axios';
import { baseUrl } from '../../constants';


export const getGalleries = async (language_code) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/gallery`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const getListOfGalleries = async (language_code) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/list-gallery`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGalleryRooms = async (
  language_code,
  name_category,
  content_id
) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${language_code}/json/gallery?category=${name_category}&content_id=${content_id}`
    );
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};


export const getInternalGalleries = async (language_code) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/internal-gallery`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const getInternalGalleryById = async (language_code, id_gallery) => {
  try {
    const res = await axios.get(`${baseUrl}/${language_code}/json/internal-gallery?content_id=${id_gallery}`);
    return res.data[0];
  } catch (error) {
    console.error(error);
  }
};