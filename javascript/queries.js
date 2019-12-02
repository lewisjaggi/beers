let myInit = {
    method:'GET',
    mode: 'cors',
    cache:'default',
};

function getAverageScore(countryName)
{
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

function getTop10(countryName){

    url = `http://127.0.0.1:5000/beers?country=${countryName}`;
    
    return fetch(url,myInit)
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
        return responseData;
    }).catch(err => {
        console.error('Error: ', err);
    });
}
