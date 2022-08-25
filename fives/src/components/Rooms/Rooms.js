import React, { useState, useEffect, useMemo, useCallback } from 'react';
import TypeTabs from '../Tabs/TypeTabs';


const Rooms = ({ options , rooms, blockData, isRoom }) => {
  
 
  

  const optionsTabs = options.map((el, id) => ({
    value: id,
    label: el.name,
    id:el?.id
  }));

  const {
    banner: { title },
    description,
    title_button_export: buttonTitle,
  } = blockData;
  return (
    <section className="room-types">
      <div className="container">
        <div className="rooms-info-content">
          <div className="room-title"
                dangerouslySetInnerHTML={{
                  __html:title
                }}>
            
            {/* Our<span className="room-title-comp">Rooms and types</span> */}
          </div>
          <div
            className="rooms-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <TypeTabs
          elements={rooms}
          buttonTitle={buttonTitle}
          options={optionsTabs}
          type="rooms"
          activeTab={0}
          isRoom = {isRoom}
         
        />
      </div>
    </section>
  );
};

export default Rooms;
