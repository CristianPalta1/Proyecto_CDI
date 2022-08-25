import Head from 'next/head';
import { useEffect } from 'react';
import Banner from 'components/Banner';
import ResidencesAtTfh from 'components/SectionResidences/ResidencesAtTfh';
import EnjoyActivities from 'components/Carousels/ActivitiesCarousel/EnjoyActivities';
import { getDestinations } from 'services/destinations';
import { isMobile } from 'react-device-detect';
import { getExperiences } from 'services/experiences';


const Destination = ({ destinationInfo, activities, destinations }) => {
  var meta = { title: "", description: "" }
  useEffect(() => {
    document.querySelector("#__next main").classList.add('property-home');
    let header = document.querySelector('.header');
    let booking = document.querySelector('.booking-form');
    header.classList.add('scroll');
    booking?.classList.add('scroll');

    if (isMobile) return booking?.classList.remove('scroll');

    return () => {
      header.classList.remove('scroll');
      booking?.classList.remove('scroll');
      document.querySelector("#__next main").classList.remove('property-home');
    };
  }, []);

  const infoBanner = {
    title: '',
    description: '',
  };

  destinationInfo.field_meta_tags ? meta = JSON.parse(destinationInfo.field_meta_tags) : meta
  if (destinationInfo) {


    const { title, desktop_image, mobile_image, body, two_images } = destinationInfo;
    const data = {
      description: body,
      font_color: 'black',
      name: title,
      images: two_images,
    };
    return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta charSet="utf-8" />
          <meta name="description" content={meta.description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="Index" />
          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        </Head>
        <Banner
          info={infoBanner}
          background={
            desktop_image || { url: '/resourses/assets/banner-sense.png' }
          }
          mobileBackground={
            mobile_image || { url: '/resourses/assets/tfh-banner-mob.png' }
          }
        />
        <ResidencesAtTfh data={data} />
        {/* Slider de hoteles en el destino */}
        <EnjoyActivities activities={activities.slice(0,6)} />
      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticPaths = async ({ locales }) => {
  const destinations = await getDestinations();
  const paths = [];
  destinations?.forEach((destination) => {
    for (const locale of locales) {
      if (locale !== 'default') {
        paths.push({
          params: {
            place: destination.title?.toLowerCase().replace(/<[^>]+>/g, '').split(' ').join('-'),
          },
          locale,
        });
      }
    }
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {

  const { place } = params;
  const destinations = await getDestinations(locale);
  const activities = await getExperiences(locale);
  const thisDestination = destinations?.find(
    (el) => el.title.toLowerCase().replace(/<[^>]+>/g, '').split(' ').join('-') === place
  );



  return {
    props: {
      destinationInfo: thisDestination || [],
      activities: activities || [],
    },
  };
};

export default Destination;
