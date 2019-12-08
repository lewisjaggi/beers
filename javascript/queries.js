let myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
};

function getAverageScore(countryName) {
    return Math.random() * 5;
}


async function getTop10(countryName) {

    url_query = `${url}/beers?country=${countryName}&min=${min}&max=${max}`;

    try {
        const response = await fetch(url_query, myInit);
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        console.error('Error: ', err);
    }
}

async function getBeerStat(beerId)
{
    url_query = `${url}/beerStat?beerId=${beerId}`;

    try {
        const response = await fetch(url_query, myInit);
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        console.error('Error: ', err);
    }
}

async function getSimilarBeers(style)
{
    url_query = `${url}/similarBeers?style=${style}&min=${min}&max=${max}`;

    try {
        const response = await fetch(url_query, myInit);
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        console.error('Error: ', err);
    }
}

async function getBeersStyle()
{
    url_query = `${url}/style`;

    try {
        const response = await fetch(url_query, myInit);
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        console.error('Error: ', err);
    }
}
