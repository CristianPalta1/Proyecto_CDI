import React from 'react';
import TypeTabs from '../Tabs/TypeTabs';

const Experiences = ({ blockData, experiences, tabs}) => {
  const {
    banner: { title },
    description,
    title_button_export,
  } = blockData;

  const options = tabs.map((el, id) => ({
    value: id,
    label: el.name,
  }));

  return (
    <section className="room-types">
      <div className="container">
        <div className="rooms-info-content">
          <div className="room-title"
              dangerouslySetInnerHTML={{
                __html:title
              }}>
            
          </div>
          <div
            className="rooms-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <TypeTabs
          elements={experiences}
          options={options}
          buttonTitle={title_button_export}
          activeTab={0}
          isExperience = {true}
        />
      </div>
    </section>
  );
};

export default Experiences;
