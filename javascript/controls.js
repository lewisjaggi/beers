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
        <p class="alcohol mb-0">Alcohol : ${beer.abv == null ? "Unknown" : parseFloat(beer.abv).toFixed(1)}</p>
        </a>
    </div> 
    </div> 
    `;
    return {content: markup, id: id};
}

function createCountry(country) {
    const markup = `   
      <tr class='table-row' data-country='${country.iso}'>
        <td><span class="rank">${country.rank}</span></td>
        <td><span class="countryName">${country.name}</span></td>
        <td><span class="countryAverage">${country.average}</span></td>
      </tr>
    `;
    return markup;
}

function createBeerStat(beerInfo) {
    const markup = `
    <div id="beerRadarContainer" class="col-sm">
        <canvas id="beerRadar"></canvas>
    </div>
    <div class="col-sm">
        <canvas id="similarBeersBar"></canvas>
    </div>
    <div class="col-sm">
        <canvas id="similarBeersFullBar"></canvas>
    </div>
    `;
    return markup;
}

function createSlider() {
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [min, max],
        connect: true,
        range: {
            'min': min,
            'max': max
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
        min = values[0];
        max = values[1];
        createColorVolumeStyle();
    });


}

function createPicker() {
    getBeersStyle().then(style => {
        var select, i, option;
        select = document.getElementById('multipleSelect');

        for (i = 1; i < style.length; i += 1) {
            beerstyle.push(style[i].style);
            option = document.createElement('option');
            option.value = option.text = style[i].style;
            option.selected = true;
            select.append(option)
        }
        $('[name=duallistbox]').bootstrapDualListbox({
            nonSelectedListLabel: 'Non-selected Style',
            selectedListLabel: 'Selected Style',
            moveOnSelect: false,
        });
    });

    $('[name=duallistbox]').on('change', e => {
        beerstyle = $('[name=duallistbox]').val();
        createColorVolumeStyle();
    });

}

function createSearch() {
    var searchInput = document.getElementById('searchInput');
    searchInput.onchange = function () {
        console.log(this.value);
    };
}




