import { google } from 'google-maps';


function initMap() {
  // Crie um objeto LatLng com as coordenadas da localização
  var location = { lat: -23.550520, lng: -46.633308 }; // Exemplo: São Paulo, Brasil

  // Crie um novo mapa dentro do elemento com o id "map"
  var map = new google.maps.Map(document.getElementById('map'), {
    center: location, // Defina o centro do mapa para a localização
    zoom: 12 // Defina o nível de zoom desejado
  });

  // Adicione um marcador para a localização no mapa
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Minha Localização'
  });
}

// Chame a função initMap() para iniciar o mapa após o carregamento completo da página
window.onload = function() {
  initMap();
};

