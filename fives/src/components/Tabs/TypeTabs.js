import React, { useState, useEffect, useCallback } from 'react';
import LargeCard from '../Cards/LargeCard';
import RestaurantCard from '../Cards/RestaurantCard';
import ExperienceCards from 'components/Cards/ExperiencesCard';
import RoomCard from '../Cards/RoomCard';
import { useRouter } from 'next/router';

const TypeTabs = ({ elements, buttonTitle, options, activeTab, withOutHeight = false, isRoom = false, isExperience = false }) => {

  const [dataFilter, setDataFilter] = useState([]);
  const [showTabsContent, setShowTabsContent] = useState(0);
  const [initialTab, setInitialTab] = useState(0);
  const [tabActive, setTabActive] = useState(options[initialTab].value);
  const [typeOf, setTypeOf] = useState(options[initialTab].label);
  const [hotelId, setHotelId] = useState(options[initialTab].id)


  const handleFilter = useCallback(
    (tab, label, id) => {

      setTabActive(tab);

      setTypeOf(label);

      setHotelId(id);

      let arrFiltered = [];

      for (const item of elements) {
        
        if (item.type === typeOf) {
          arrFiltered.push(item);
        } else if (item.type?.name === typeOf) {
          arrFiltered.push(item);
        } else if (item?.hotel === hotelId || item?.hotel === tabActive  ) {
          arrFiltered.push(item);
        } else if (item.type_experience?.includes(typeOf)) {
          arrFiltered.push(item);
        } 
      }

      setDataFilter(arrFiltered);

    },
    [elements, typeOf, hotelId, tabActive]
  );


  useEffect(() => {
    handleFilter(tabActive, typeOf, hotelId);
  }, [handleFilter, tabActive, typeOf, hotelId, initialTab]);


  return (
    <>
      <div className="rooms-types-tabs">
        {options.map(({ value, label, id }, idx,) => {
          
          return (
            <button
              key={`tab-${idx}`}
              type="button"
              className={`tab-room ${tabActive === value && 'active'}`}
              onClick={() => handleFilter(value, label, id)}
            >
              {label}
            </button>
          )

        }
        )}
      </div>

      <div className="rooms-types-content row">
        {
          dataFilter.map((item, id) => {
            
            return (
              <div className={`room-type ${id % 2 != 0 ? "card__inver" : ""} ${isExperience ? "col-md-12" : "col-md-6"}`} key={`room ${id}`}>
                {
                  isExperience ? (<ExperienceCards experienceData={item} />) : (<RestaurantCard  epic = {item.epic}rest={item} withOutHeight={withOutHeight} isRooms={isRoom} />)
                }

              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default TypeTabs;


