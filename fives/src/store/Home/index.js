import { createContext, useContext, useMemo } from 'react';

const HomeContext = createContext(null);

export const HomeContextProvider = ({ children, home }) => {
  const {
    background_sense,
    background_sense_mobile,
    banner,
    block_images,
    featured_items,
    image_rewards,
    senses,
    senses_title,
    short_description_experiences,
    short_description_sense,
    title,
    title_experiences,
    title_hotels,
    title_plus,
    title_rewards,
    title_see_all,
  } = home;
  const values = useMemo(
    () => ({
      background_sense,
      background_sense_mobile,
      banner,
      block_images,
      featured_items,
      image_rewards,
      senses,
      senses_title,
      short_description_experiences,
      short_description_sense,
      title,
      title_experiences,
      title_hotels,
      title_plus,
      title_rewards,
      title_see_all,
    }),
    [
      background_sense,
      background_sense_mobile,
      banner,
      block_images,
      featured_items,
      image_rewards,
      senses,
      senses_title,
      short_description_experiences,
      short_description_sense,
      title,
      title_experiences,
      title_hotels,
      title_plus,
      title_rewards,
      title_see_all,
    ]
  );

  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    console.error('Error when try to mount App Context');
  }

  return context;
};
