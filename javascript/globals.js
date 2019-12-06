var mymap = L.map('map').setView([46.81, 8.22], 5);
var layerGroup = new L.LayerGroup();
layerGroup.addTo(mymap);
var info = L.control();
var url = 'http://127.0.0.1:5000';
