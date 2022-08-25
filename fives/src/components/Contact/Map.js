import ContactMap from 'components/ContactMap/Map';
import React, { useState, useEffect, useCallback } from 'react';

//Components
import ListHotelPlaces from './ListHotelPlaces';
const Map = ({ mapBlockInfo, mapPlaces = [], mapHotels = [] }) => {
  const [dataFiltered, setDataFiltered] = useState([' ']);
  const [tabActive, setTabActive] = useState('Hotel');
  const [selectedPlace, setSelectedPlace] = useState(mapHotels[0]);

  const splittedTitle = mapBlockInfo?.title
    ? mapBlockInfo.title.split(' ')
    : null;

  const dataMapPlaces = mapPlaces.map((el, idx) => ({ ...el, id: idx }));
  const dataMapHotels = mapHotels.map((el, idx) => ({ ...el, id: idx }));

  const data = {
    Places: dataMapPlaces,
    Hotel: dataMapHotels,
  };

  const handleFilter = useCallback(
    (tab) => {
      setTabActive(tab);
      const { Places, Hotel } = data;

      let arrFiltered = [];

      tab === 'Places' ? (arrFiltered = Places) : [];
      tab === 'Hotel' ? (arrFiltered = Hotel) : [];

      setDataFiltered(arrFiltered);
    },
    [],
  )

  useEffect(() => {
    handleFilter(tabActive);
    return () => null;
  }, [handleFilter ,tabActive]);

  
  
 

  var description = mapBlockInfo?.description.replace(/&amp;/g, "&");
  if (dataFiltered == undefined) return <p>Cargando</p>;
  return (
    <section className="contact-map">
      <h2 className="content-title">
        {splittedTitle.length && (
          <>
            {splittedTitle[0]}
            <span className="content-title-comp">{splittedTitle[1]}</span>
          </>
        )}
      </h2>
      <p className="content-description">{description}</p>
      <div className="container-fluid custom__map">
        <div className="row">
          <div className="col-md-4">
            <div className="content-actions">
              <button
                type="button"
                className={`btn btn-hotel ${tabActive === 'Hotel' && 'active'}`}
                onClick={() => handleFilter('Hotel')}
              >
                Hotel
              </button>
              <button
                type="button"
                className={`btn btn-places ${
                  tabActive === 'Places' && 'active'
                }`}
                onClick={() => handleFilter('Places')}
              >
                Places
              </button>
            </div>
            <div className="content-info">
              <ListHotelPlaces
                data={dataFiltered}
                selectedPlace={selectedPlace}
                setSelectedPlace={setSelectedPlace}
              />
            </div>
          </div>
          <div className="col-md-8">
            <ContactMap selectedPlace={selectedPlace} places={dataFiltered} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
