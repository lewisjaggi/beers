function createBeer(beer) {
    const markup = `
    <div class="beer">
        <h2>
            ${beer.name}
        </h2>
        <p class="brewery">Brewery : ${beer.brewery}</p>
        <p class="beerStyle">Style : ${beer.style}</p>
        <p class="average">Note : ${beer.average.toFixed(2)}</p>
        <p class="alcohol">Alcohol : ${beer.abv == null ? "Unknown" : parseFloat(beer.abv).toFixed(2)}</p>
    </div>
    `;
    return markup;
}

function createCountry(country) {
    const markup = `
    <div class="country">
        <span class="rank">${country.rank}</span>
        <span class="countryName">${country.name}</span>
        <span class="countryAverage">${country.average}</span>
    </div>
    `;
    return markup;
}

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 10],
    connect: true,
    range: {
        'min': 0,
        'max': 10
    },
    format: wNumb({
        decimals: 1,
    })


});

var alcoholSliderValueElement = document.getElementById('alcoholRange');

slider.noUiSlider.on('update', function (values) {
    alcoholSliderValueElement.value = values.join('% - ') + "%";
});

