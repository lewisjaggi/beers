let myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
};

function getAverageScore(countryName) {
    return Math.random() * 5;
}

/*
function getBeersCountry(countryName)
{
    let beer1 = {
        id=82352,
        name=Konrads Stout Russian Imperial Stout,
        brewery_id=18604,
        state="",
        stNO,Russian Imperial Stout, Rotating,10.4,No notes at this time.,f
    }
}*/

async function getTop10(countryName) {

    url_query = `${url}/beers?country=${countryName}`;

    try {
        const response = await fetch(url_query, myInit);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    } catch (err) {
        console.error('Error: ', err);
    }
}

