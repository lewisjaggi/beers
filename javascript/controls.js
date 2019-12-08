function createBeer(beer) {
    let id = beer.beer_id;
    const markup = `
    <div class="beer">
    <div class="list-group" id="${id}">
        <a class="list-group-item list-group-item-action pointer">
        <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${beer.name}</h5>
        <small>Brewery : ${beer.brewery}</small>
        </div>
        <p class="beerStyle mb-0">Style : ${beer.style}</p>
        <p class="average mb-0">Note : ${beer.average.toFixed(2)}</p>
        <p class="alcohol mb-0">Alcohol : ${beer.abv == null ? "Unknown" : parseFloat(beer.abv).toFixed(2) }</p>
        </a>
    </div> 
    </div> 
    `;
    return { content: markup, id: id};
}

function createCountry(country) {
    const markup = `   
      <tr>
        <td><span class="rank">${country.rank}</span></td>
        <td><span class="countryName">${country.name}</span></td>
        <td><span class="countryAverage">${country.average}</span></td>
      </tr>
    `;
    return markup;
}

function createBeerStat(beerInfo)
{
    const markup = `
    <div id="beerRadarContainer">
        <canvas id="beerRadar"></canvas>
        <div id="beerScoreValues">
            <span class="score">Feel : ${beerInfo.feel  == null ? "Unknown" : parseFloat(beerInfo.feel).toFixed(2)}</span>
            <span class="score">Look : ${beerInfo.look  == null ? "Unknown" : parseFloat(beerInfo.look).toFixed(2)}</span>
            <span class="score">Smell : ${beerInfo.smell  == null ? "Unknown" : parseFloat(beerInfo.smell).toFixed(2)}</span>
            <span class="score">Taste : ${beerInfo.taste  == null ? "Unknown" : parseFloat(beerInfo.taste).toFixed(2)}</span>
        </div>
        <canvas id="similarBeersBar"></canvas>
    </div>

    `;
    return markup;
}

function createSlider() {
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [0, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 80
        },
        format: wNumb({
            decimals: 1,
        })


    });

    var alcoholSliderValueElement = document.getElementById('alcoholRange');

    slider.noUiSlider.on('update', function (values) {
        alcoholSliderValueElement.value = values.join('% - ') + "%";

    });

    slider.noUiSlider.on('change', function (values) {
        alcoholSliderValueElement.value = values.join('% - ') + "%";
        createColorVolume(values[0],values[1]);
    });


}



