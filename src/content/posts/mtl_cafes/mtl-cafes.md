---
title: "☕ 27 Places to Find Great Warm Drinks in Montreal"
published: 2025-01-27
description: 'A map of some of my favourite cafes in Montreal, inspired by Oliver Strand, Larry Buchanan, and Nilkanth Patel'
image: './coffee2.png'
tags: [maps]
category: 'just for fun'
draft: false 
lang: ''
---

I was inspired by [this map](https://www.nytimes.com/interactive/2014/05/06/dining/101-places-to-get-good-coffee-in-new-york.html?_r=0) by Oliver Strand, Larry Buchanan, and Nilkanth Patel in The New York Times and wanted to create my own for Montreal. My selection of favourite cafes skews heavily towards Plateau establishments, so feel free to add to this map by appending an etnry to the `cafes.geojson` in [this repo](https://github.com/raphaelletseng/mtlcafes).

<iframe src="https://raphaelletseng.github.io/mtlcafes/" width="800px" height="600px">

### Notes to Recreate

[Mapbox](https://www.mapbox.com) is a great tool for building maps. The fig above is a simple, basic `index.html` page hosted on github pages. To have access to the mapbox api, you need the following code in your `<head>` tag:

```
<link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet">
<!-- <link rel="stylesheet" href="styles.css"> -->
<script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>
```

And then a `<div id="map"></div>` in the `<body>`. 

Within the `<script>` you will need to add your personal mapbox token (which you can generate for free on their website). You can initialise your map with:
```
mapboxgl.accessToken = <MAPBOX_TOKEN>;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-73.5778, 45.5111],
    zoom: 12.5
});
```

You can display `.geojson` data as a layer on the map. Geojson is a format for encoding geographic data structures (polygons or points). I have `cafes.geojson` with the properties:
- Name
- Address
- City
- Country
- Latitude
- Longitude
- Website
- Geometry: { type: Point, coordinates: [Long, Lat]} 

```
map.on('load', function () {
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
});
```
The address and website are included in the data to allow users to get more data on the selected cafe when a point is clicked.

### Future Improvements

Currently, hovering over a point will cause it to change colour from purple to orange. The following popup will appear: 
<img src="/assets/images/popup.png" alt="popup-example" width="200px">
Clicking the point will redirect you to the cafe's website. The UI could be improved here because the user doesn't get great feedback to indicate that a new tab will be opened. And whilst the map does say 'Click.. to visit their website' the actual space for the user to interact with each cafe is only the area of the point. In the NYT map, the popup stays open if you are hovering over its area and not just the pin point:
<img src="/assets/images/nyt_popup.png" alt="nyt-popup-example" width="200px"> 
Something to add down the line. I also started implementing an additional layer for some food locations (see `food.geojson`) before deciding to stay true to the original goal of recreating a coffee map of Montreal. Although, whilst I love a cafe and a warm drink served in a mug (matcha, chai, london fogs, hot chocolate etc.), I am only an occasional coffee drinker, so I have ultimately titled this **"27 Places to Find Great Warm Drinks in Montreal"**. 

<img src="/assets/images/drinks-footer-banner.png" alt="illustations of drinks" width="100%">