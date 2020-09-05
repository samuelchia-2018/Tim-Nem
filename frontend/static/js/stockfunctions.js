async function getstockprices(companyname){
    var serviceURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + companyname + '&apikey=NBKV8YLSSH92V2LU';
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

function getstockchart(datapoints, companyname){
  var stockChart = new CanvasJS.StockChart("chartContainer",{
    title: {
        text: "Stock Prices"
      },
      charts: [{
        toolTip:{   
        content: "{name}: {y}"      
      },      
      data: [{        
        type: "line", //Change it to "spline", "area", "column"
        name: "AAPL",
        dataPoints : datapoints
      }]
    }],
    navigator: {
      slider: {
        minimum: new Date(2018,04, 01),
        maximum: new Date(2018,06, 01)
      }
    }
  }); 
  stockChart.render();
}

function getstockchartmultiple(datapointsList, companynameList){
  //datapointsList should be list of datapoints, companynameList should be name of companynames

  //need to format the datapoints list so that the chartapi can read, we add it into datalist in the correct format
  var datalist = [];
  for(var i =0; i<companynameList.length; i++){
    var singledataformat = {
      type: "line", //Change it to "spline", "area", "column"
      name: companynameList[i],
      dataPoints: datapointsList[i]
    };
    datalist.push(singledataformat);
  }

  var stockChart = new CanvasJS.StockChart("chartContainer",{
    title: {
        text: "Stock Prices"
      },
      charts: [{
        toolTip:{   
        content: "{name}: {y}"      
      },      
      data: datalist
    }],
    navigator: {
      slider: {
        minimum: new Date(2018,04, 01),
        maximum: new Date(2018,06, 01)
      }
    }
  }); 
  stockChart.render();
}

async function renderchart(companyname){
    var datapoints = await getstockprices(companyname);
    getstockchart(datapoints, companyname);
}

async function renderchartMultiple(companynameList){
  var datapointsList = [];
  for (var i =0; i< companynameList.length; i++){
    var datapoints = await getstockprices(companynameList[i]);
    datapointsList.push(datapoints);
  }
  getstockchartmultiple(datapointsList, companynameList);
}