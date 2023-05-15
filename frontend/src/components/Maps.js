import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './Maps.css'; // Importação do arquivo CSS

const google = window.google;

function Maps({ address }) {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyD7vw8Njef4uuPx8tU4PaiABFXP1LoPfaw',
      version: 'weekly',
    });

    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 12,
          };

          const map = new google.maps.Map(document.getElementById('map'), mapOptions);

          const marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
          });
        } else {
          console.error('Geocode was not successful for the following reason:', status);
        }
      });
    });
  }, [address]);

  return <div id="map"></div>;
}

export default Maps;
