// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [ 79.497414, 11.945960],
    [79.2885,11.6774],
    [78.8807, 11.2342],
    [78.7409, 10.9194],
    [78.7047, 10.7905],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpdHJhZ2FuZXNhbiIsImEiOiJjbG5iaHYwMHYwZnhkMmtqeTAwOTM1ZzQzIn0.KZE0GxJVO5K_ZD-0i8cPqw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.560984, 11.005324],
    zoom: 14,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  let marker = new mapboxgl.Marker().setLngLat(busStops[0]).addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(() => {
      counter = (counter + 1) % busStops.length; 
      marker.setLngLat(busStops[counter]); 
      move(); 
    }, 1000);
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
  }
  move();