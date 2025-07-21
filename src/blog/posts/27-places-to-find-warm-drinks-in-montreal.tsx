import { Box, Typography, Link, Paper, Divider } from '@mui/material';

const content = (
  <Box>
    <Typography variant="body1">
      I was inspired by{' '}
      <Link
        href="https://www.nytimes.com/interactive/2014/05/06/dining/101-places-to-get-good-coffee-in-new-york.html?_r=0"
        rel="noopener"
        target="_blank"
      >
        this map
      </Link>{' '}
      by Oliver Strand, Larry Buchanan, and Nilkanth Patel in The New York Times and wanted to
      create my own for Montreal. My selection of favourite cafes skews heavily towards Plateau
      establishments, so feel free to add to this map by appending an etnry to the{' '}
      <code>cafes.json</code> in{' '}
      <Link href="https://github.com/raphaelletseng/mtlcafes" rel="noopener" target="_blank">
        this repo
      </Link>
      .
    </Typography>
    <Box sx={{ my: 4 }}>
      <iframe
        src="https://raphaelletseng.github.io/mtlcafes/"
        style={{ width: '100%', height: 500, backgroundColor: 'white', border: 'none' }}
        title="Mtl Cafes Map"
      />
    </Box>
    <Divider orientation="horizontal" sx={{ marginBottom: 2 }} flexItem />
    <Typography variant="body1">
      <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
        How I made this
      </Typography>
      <Link href="https://www.mapbox.com/" rel="noopener" target="_blank">
        Mapbox
      </Link>{' '}
      is a great tool for building maps. The fig above is a simple, basic index.html page hosted on
      github pages. To have access to the mapbox api, you need the following code in your{' '}
      <code>&lt;head&gt;</code> tag:
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          my: 2,
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
        }}
      >
        {`<link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet">
<!-- <link rel="stylesheet" href="styles.css"> -->
<script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>`}
      </Paper>
      And then a <code>&lt;div id="map"&gt;&lt;/div&gt;</code> in the <code>&lt;body&gt;.</code>{' '}
      Within the <code>&lt;script&gt;</code> you will need to add your personal mapbox token (which
      you can generate for free on their website). You can initialise your map with:
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          my: 2,
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
        }}
      >
        {`mapboxgl.accessToken = <MAPBOX_TOKEN>;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-73.5778, 45.5111],
    zoom: 12.5
});`}
      </Paper>
      You can display <code>.geojson</code> data as a layer on the map. Geojson is a format for
      encoding geographic data structures (polygons or points). I have <code>cafes.geojson</code>{' '}
      with the properties:
      <ul>
        <li>Name</li>
        <li>Address</li>
        <li>City</li>
        <li>Country</li>
        <li>Latitude</li>
        <li>Longitude</li>
        <li>Website</li>
        <li>
          Geometry: <code>{'{ type: "Point", coordinates: [Long, Lat] }'}</code>
        </li>
      </ul>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          my: 2,
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
        }}
      >
        {`map.on('load', function () {
    map.addLayer({
        'id': 'mtl_cafes',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'cafes.geojson'
        },
        'paint': {
            'circle-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#F57F17', '#8a2be2'],
            'circle-stroke-width': 0,
            'circle-opacity': 0.9,
            'circle-radius': 6
        },
        'layout': {
            'visibility': 'visible' // Initially, set this layer to be visible
        }
    });
});`}
      </Paper>
      The address and website are included in the data to allow users to get more data on the
      selected cafe when a point is clicked.
    </Typography>
    <Typography variant="h6" sx={{ marginTop: 4, marginBottom: 2 }}>
      Future Improvements
    </Typography>
    Currently, hovering over a point will cause it to change colour from purple to orange. Clicking
    the point will redirect you to the cafe’s website. The UI could be improved here because the
    user doesn’t get great feedback to indicate that a new tab will be opened. And whilst the map
    does say <i>‘Click.. to visit their website’</i> the actual space for the user to interact with
    each cafe is only the area of the point. In the NYT map, the popup stays open if you are
    hovering over its area and not just the pin point. Something to add down the line. <br />I also
    started implementing an additional layer for some food locations (see <code>food.geojson</code>)
    before deciding to stay true to the original goal of recreating a coffee map of Montreal.
    Although, whilst I love a cafe and a warm drink served in a mug (matcha, chai, london fogs, hot
    chocolate etc.), I am only an occasional coffee drinker, so I have ultimately titled this{' '}
    <b>“27 Places to Find Great Warm Drinks in Montreal”</b>.
  </Box>
);

export default {
  slug: '27-places-to-find-warm-drinks-in-montreal',
  title: '☕ 27 Places to find warm drinks in Montreal',
  date: '2025-01-27',
  description: 'Good drinks can be found all over the city.',
  tags: ['hi'],
  content,
};
