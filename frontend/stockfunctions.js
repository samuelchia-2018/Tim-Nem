async function getstockprices(companyname){
    var serviceURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + companyname + '&apikey=demo';
    //console.log(serviceURL);
    var response = await fetch(serviceURL);
    //console.log(response);
    var data = await response.json();
    //console.log(data);
    var timeSeriesData = data['Time Series (Daily)'];
    //console.log(timeSeriesData);
    var keys = [];
    for (var key in timeSeriesData){
        keys.push(new Date(key));
    }
    var close = [];
    for (var key in timeSeriesData){
        var current = timeSeriesData[key];
        close.push(current['4. close']);
        //console.log(current['4. close']);
    }
    //console.log(keys);
    toreturn = [];
    for(i=0; i<keys.length; i++){
        toreturn.push({x:keys[i], y: Number(close[i])});
    }
    console.log(toreturn);
    return toreturn;
}