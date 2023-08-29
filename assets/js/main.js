// // Initialize map
// mapboxgl.accessToken = 'your-access-token';
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [lng, lat],
//   zoom: 12
// });

// // Add marker
// var marker = new mapboxgl.Marker()
//   .setLngLat([lng, lat])
//   .addTo(map);

// // Add popup
// var popup = new mapboxgl.Popup()
//   .setLngLat([lng, lat])
//   .setHTML('<h3>' + name + '</h3><p>' + description + '</p>')
//   .addTo(map);

import iconUrl from './../img/levelle-up-curbstone-black.png'


let map = L.map('map').setView([44.848856106591185, -0.5591143229314954], 14);

let levelleupIcon = L.icon({
    iconUrl: iconUrl,

    iconSize:     [100, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([44.848856106591185, -0.5591143229314954], {icon: levelleupIcon}).addTo(map);
