import axios from 'axios';
import { baseUrl } from '../../constants';

export default async function handler(req, res) {
  try {
    const { locale } = req.query;

    const footerCenter = []
    if (locale === 'es') {
      let footerEs = await axios.get(`${baseUrl}/${locale}/json/menu/footer`);
      footerCenter.push(footerEs);
    } else {
      let footerEn = await axios.get(`${baseUrl}/${locale}/json/menu/footer-en`);
      footerCenter.push(footerEn);
    }
    const footerNewsLetter = []
    if (locale === 'es') {
      let footerNewsLetterEs = await axios.get(`${baseUrl}/${locale}/json/test-newsletter`);
      footerNewsLetter.push(footerNewsLetterEs);
    } else {
      let footerNewsLetterEn = await axios.get(`${baseUrl}/${locale}/json/test-newsletter`);
      footerNewsLetter.push(footerNewsLetterEn);
    }

    const footer = await axios.get(`${baseUrl}/${locale}/json/footer-menu`);

    const footerFollowText = await axios.get(`${baseUrl}/${locale}/json/words-footer`);
   
    const followUs = await axios.get(
      `${baseUrl}/${locale}/json/footer-follow-us`
    );
    return res.status(200).json({
      footer: footer.data,
      footerCenter: footerCenter[0].data,
      followUs: followUs.data,
      newsLetter: footerNewsLetter[0].data[0],
      footerFollowText: footerFollowText.data[0]
    });
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
}
