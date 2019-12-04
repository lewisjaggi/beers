//#region variables
var mymap = L.map('map').setView([46.81, 8.22], 5);
var countries;
var geojson;
var info = L.control();
//#endregion

//#region Logic functions

function setAverageForCountries(countries)
{
    countries.forEach(element => {
        element.properties.average = getAverageScore(element.properties.ADMIN)
    });
}

//#endregion

//#region Map Interaction
function getColor(d) {
    return d > 5 ? '#800026' :
           d > 4  ? '#BD0026' :
           d > 3  ? '#E31A1C' :
           d > 2  ? '#FC4E2A' :
           '#FD8D3C';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.average),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function selectCountry(e)
{
    let country = convertIso3ToIso2(e.target.feature.properties.ISO_A3);
    getTop10(country).then(beers => {
        let content = "";
        beers.forEach(beer => {
            content += createBeer(beer);  
          });

        document.getElementById("beers").innerHTML = content;
    });
}

function createBeer(beer)
{
    const markup = `
    <div class="beer">
        <h2>
            ${beer.name}
        </h2>
        <p class="brewery">Brewery : ${beer.brewery}</p>
        <p class="beerStyle">Style : ${beer.style}</p>
        <p class="average">Note : ${beer.average.toFixed(2)}</p>
        <p class="alcohol">Alcohol : ${beer.abv == null ? "Unknown" : parseFloat(beer.abv).toFixed(2) }</p>
    </div>
    `;
    return markup;
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: selectCountry,
    });
}
//#endregion

//#region Map Creation
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1Ijoia3Vyb2thYmUiLCJhIjoiY2szNGsxNDl2MDJ3cTNvbXZucGZibG5oOSJ9.AC23cXaWGHa-venrXcvK5A'
}).addTo(mymap);


$.getJSON("./data/countries.geojson", function(json) {
    countries = json.features;
    setAverageForCountries(countries);
    geojson = L.geoJson(countries, {style: style, onEachFeature: onEachFeature}).addTo(mymap);
});
//#endregion

//#region Info display
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Beer average</h4>' +  (props ?
        '<b>' + props.ADMIN + '</b><br />' + props.average
        : 'Hover over a country');
};

info.addTo(mymap);
//#endregion

//#region Legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 1, 2, 3, 4, 5],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mymap);
//#endregion