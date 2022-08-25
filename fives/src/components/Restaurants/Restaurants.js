import React from 'react';
import TypeTabs from '../Tabs/TypeTabs';

const Restaurants = ({ blockData, restaurants, tabs, from, withOutHeight }) => {
  const {
    banner: { title },
    description,
    title_button_export,
  } = blockData;

  const options = tabs.map((el, id) => ({
    value: el.id || id,
    label: el.name,
  }));

  return (
    <section className="room-types">
      <div className="container">
        <div className="rooms-info-content">
          <div className="room-title" dangerouslySetInnerHTML={{ __html: title }}>
     
          </div>

          <div
            className="rooms-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <TypeTabs
          elements={restaurants}
          options={options}
          buttonTitle={title_button_export}
          activeTab={0}
          withOutHeight={withOutHeight}
        />
      </div>
    </section>
  );
};

export default Restaurants;
