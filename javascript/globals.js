var mymap = L.map('map').setView([46.81, 8.22], 5);
var layerGroup = new L.LayerGroup();
layerGroup.addTo(mymap);
var info = L.control();
var url = 'http://127.0.0.1:5000';

var radarChartTitle = "Average score of other properties of the beer";
var radarChartColor = "rgba(211,132,35,0.5)";

var similarBeersTitle = "Average score of this beer among the top 10 beers in this category";
var similarBeerColorsBarGraph = "#ffa200";
var selectedBeerColorInBarGraph = "#ff5100";


