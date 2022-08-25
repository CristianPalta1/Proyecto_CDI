import React, { useEffect, useRef } from 'react';

export const ContactMap = ({ selectedPlace }) => {
  const mapRef = useRef(null);
  useEffect(() => {
    const google = window.google;
    let map = mapRef.current;
    const coords = {
      lat: Number(selectedPlace.latitude),
      lng: Number(selectedPlace.longitude),
    };
    const myLatlng = new google.maps.LatLng(coords);
    const mapOptions = {
      zoom: 16,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: selectedPlace?.name,
    });

    const contentString =
      `<div class="info-window-content"><h2>${selectedPlace?.name}</h2>` +
      selectedPlace?.description__value;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
    });
  });

  return (
    <div className="map-wrapper">
      <div className="rounded h-full map" ref={mapRef} />
    </div>
  );
};

export default ContactMap;
