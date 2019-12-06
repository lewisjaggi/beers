function createBeer(beer) {
    const markup = `
    <div class="beer">
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
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
    return markup;
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

