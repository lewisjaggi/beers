let myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
};

function getAverageScore(countryName) {
    return Math.random() * 5;
}


async function getTop10(countryName) {

    url_query = `${url}/beers?country=${countryName}`;

    try {
        const response = await fetch(url_query, myInit);
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        console.error('Error: ', err);
    }
}

