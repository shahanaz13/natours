/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZnNoYWhhbmF6IiwiYSI6ImNsOXRvMWR5cjBmdDYzdW15Z2JodTZoN2oifQ.vtAAbseQXSqP_V_MTRxApA';
    //pk.eyJ1IjoiZnNoYWhhbmF6IiwiYSI6ImNrZHp3bTEzYzFhcDcyem9hOTlxZWdvYWIifQ.tn7cXa8R-NvDMHMJu31jxQ

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/fshahanaz/cl9to6p8w000e14rwsv6dmzfj',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
