import axios from 'axios';
import { baseUrl } from '../../constants';

export default async function handler(req, res) {
  try {
    const { locale } = req.query;

    const lateralMenu = []
    if (locale === 'es') {
      let menuLatEs = await axios.get(`${baseUrl}/${locale}/json/menu/min-menu-es`);
      lateralMenu.push(menuLatEs);
    } else {
      let menuLatEn = await axios.get(`${baseUrl}/${locale}/json/menu/min-menu`);
      lateralMenu.push(menuLatEn);
    }
   

    const mainMenu = []

    if (locale === 'es') {
      let menuX = await axios.get(`${baseUrl}/${locale}/json/menu/main-es`);
      mainMenu.push(menuX);
    } else {
      let menuY = await axios.get(`${baseUrl}/${locale}/json/menu/main`);
      mainMenu.push(menuY);
    }

    const infoContant = []

    if (locale === 'es') {
      let infoContactEs = await axios.get(`${baseUrl}/${locale}/json/contact-information-menu`);
      infoContant.push(infoContactEs);
    } else {
      let infoContactEn = await axios.get(`${baseUrl}/${locale}/json/contact-information-menu`);
      infoContant.push(infoContactEn);
    }

    return res
      .status(200)
      .json({ mainMenu: mainMenu[0].data, lateralMenu: lateralMenu[0].data, infoContact: infoContant[0].data[0] });
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
}
