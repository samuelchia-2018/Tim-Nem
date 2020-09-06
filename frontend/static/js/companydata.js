async function getcompanybalancesheetjsondata(companyname){
    // var serviceURL = "https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=" + companyname+"&apikey=NBKV8YLSSH92V2LU";
    var serviceURL = "https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=" + companyname+"&apikey=164GD01KSMX23URK";
    var companyfinancialdatajson = await fetch(serviceURL, {method: 'GET'});
    var data = await companyfinancialdatajson.json();
    return data;
}

async function getcompanyincomestatementjsondata(companyname){
    var serviceURL = "https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=" + companyname+"&apikey=8FD6J27P60XT9SS2";
    //var serviceURL = "https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=" + companyname+"&apikey=164GD01KSMX23URK";
    var companyfinancialdatajson = await fetch(serviceURL, {method: 'GET'});
    var data = await companyfinancialdatajson.json();
    return data;
}

//---------ALL BALANCE SHEET RELATED FUNCTIONS GO HERE---------//

async function getcurrentassets(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    var annual_reports = await balance_sheet.annualReports;
    //var annual_reports = balance_sheet.annualReports;
    var all_current_assets = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].totalCurrentAssets != null){
            all_current_assets.push(annual_reports[i].totalCurrentAssets);
        }
    }
    return all_current_assets;
}

async function getcurrentliabilites(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //console.log(balance_sheet);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_current_liabilities = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].totalCurrentLiabilities != null){
            all_current_liabilities.push(annual_reports[i].totalCurrentLiabilities);
        }
    }
    return all_current_liabilities;
}

async function getinventory(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_inventory = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].inventory != null){
            all_inventory.push(annual_reports[i].inventory);
        }
    }
    return all_inventory;
}

async function gettotalasset(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_total_assets = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].totalAssets != null){
            all_total_assets.push(annual_reports[i].totalAssets);
        }
    }
    return all_total_assets;
}

async function gettotalequity(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_total_equity = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].totalAssets != null && annual_reports[i].totalLiabilities != null){
            all_total_equity.push(Number(annual_reports[i].totalAssets) - Number(annual_reports[i].totalLiabilities));
        }
    }
    return all_total_equity;
}

async function getlongtermdebt(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_long_term_debt = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].longTermDebt != null){
            all_long_term_debt.push(annual_reports[i].longTermDebt);
        }
    }
    return all_long_term_debt;
}

async function getcash(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_cash = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].cash != null){
            all_cash.push(annual_reports[i].cash);
        }
    }
    return all_cash;
}

async function gettotalliabilities(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_total_liabilities = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].totalLiabilities != null){
            all_total_liabilities.push(annual_reports[i].totalLiabilities);
        }
    }
    return all_total_liabilities;
}

async function getAR(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_AR = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].netReceivables != null){
            all_AR.push(annual_reports[i].netReceivables);
        }
    }
    return all_AR;
}

async function getAP(companyname, balance_sheet){
    //var balance_sheet = await getcompanybalancesheetjsondata(companyname);
    //var annual_reports = await balance_sheet.annualReports;
    var annual_reports = balance_sheet.annualReports;
    var all_AP = [];
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].netReceivables != null){
            all_AP.push(annual_reports[i].netReceivables);
        }
    }
    return all_AP;
}

//----------------ALL INCOME STATEMENT RELATED FUNCTIONS GO HERE----------------//



async function getCOGS(companyname, income_statement){
    //var income_statement = await getcompanyincomestatementjsondata(companyname);
    //var annual_reports = await income_statement.annualReports;
    var annual_reports = income_statement.annualReports;
    var all_COGS = [];
    if (annual_reports == undefined) {
        return null;
    }
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].costOfRevenue != null){
            all_COGS.push(annual_reports[i].costOfRevenue);
        }
    }
    return all_COGS;
}



async function gettotaloperatingexpense(companyname, income_statement){
    //var income_statement = await getcompanyincomestatementjsondata(companyname);
    //var annual_reports = await income_statement.annualReports;
    var annual_reports = income_statement.annualReports;
    var all_total_operating_expense = [];
    if (annual_reports == undefined) {
        return null;
    }
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].totalOperatingExpense != null){
            all_total_operating_expense.push(annual_reports[i].totalOperatingExpense);
        }
    }
    return all_total_operating_expense;    
}

async function getebit(companyname, income_statement){
    //var income_statement = await getcompanyincomestatementjsondata(companyname);
    //var annual_reports = await income_statement.annualReports;
    var annual_reports = income_statement.annualReports;
    var all_ebit = [];
    if (annual_reports == undefined) {
        return null;
    }
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].ebit != null){
            all_ebit.push(annual_reports[i].ebit);
        }
    }
    return all_ebit;    
}

async function getInterest(companyname, income_statement){
    //var income_statement = await getcompanyincomestatementjsondata(companyname);
    //var annual_reports = await income_statement.annualReports;
    var annual_reports = income_statement.annualReports;
    var all_interest_expense = [];
    if (annual_reports == undefined) {
        return null;
    }
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].interestExpense != null){
            all_interest_expense.push(annual_reports[i].interestExpense);
        }
    }
    return all_interest_expense;   
}

async function getrevenue(companyname, income_statement){
    //var income_statement = await getcompanyincomestatementjsondata(companyname);
    //var annual_reports = await income_statement.annualReports;
    var annual_reports = income_statement.annualReports;
    var all_revenue = [];
    if (annual_reports == undefined) {
        return null;
    }
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].totalRevenue != null){
            all_revenue.push(annual_reports[i].totalRevenue);
        }
    }
    return all_revenue;    
}

async function getnetincome(companyname, income_statement){
    var annual_reports = income_statement.annualReports;
    var all_net_income = [];
    if (annual_reports == undefined) {
        return null;
    }
    for (var i =0; i< annual_reports.length; i++){
        if(annual_reports[i].netIncome != null){
            all_net_income.push(annual_reports[i].netIncome);
        }
    }
    return all_net_income;
}


//async function getdepreciation()

//liquidity ratios below

async function currentratio(companyname, balance_sheet){
    var current_assets = await getcurrentassets(companyname, balance_sheet);
    var current_liabilites = await getcurrentliabilites(companyname, balance_sheet);
    var currentratiocomputed = [];
    if(current_assets != null && current_liabilites != null){
        for(var i = 0; i< current_assets.length; i++){
            currentratiocomputed.push(Number(current_assets[i])/Number(current_liabilites[i]));
        }
        return currentratiocomputed;
    }
    else{
        return "Current ratio cannot be calculated";
    }
}

async function quickratio(companyname, balance_sheet){
    var current_assets = await getcurrentassets(companyname, balance_sheet);
    var inventory = await getinventory(companyname, balance_sheet);
    var current_liabilites = await getcurrentliabilites(companyname, balance_sheet);
    var quickratiocomputed = [];
    if(current_assets != null && current_liabilites != null && inventory != null){
        for(var i =0; i<current_assets.length; i++){
            quickratiocomputed.push((Number(current_assets[i]) - Number(inventory[i]))/ current_liabilites[i]);
        }
        return quickratiocomputed;
    }
    else{
        return "Quick ratio cannot be calculated";
    }
}

async function cashratio(companyname, balance_sheet){
    var cash = await getcash(companyname, balance_sheet);
    var current_liabilites = await getcurrentliabilites(companyname, balance_sheet);
    var cashratiocomputed = [];
    if(cash != null && current_liabilites != null){
        for(var i = 0; i< cash.length; i++){
            cashratiocomputed.push(Number(cash[i])/Number(current_liabilites[i]));
        }
        return cashratiocomputed;
    }
    else{
        return "Cash ratio cannot be calculated";
    }
}

async function getNWC(companyname, balance_sheet){
    var current_assets = await getcurrentassets(companyname, balance_sheet);
    var current_liabilites = await getcurrentliabilites(companyname, balance_sheet);
    var NWCcomputed = [];
    if(current_assets != null && current_liabilites != null){
        for(var i = 0; i< current_assets.length; i++){
            NWCcomputed.push(Number(current_assets[i]) - Number(current_liabilites[i]));
        }
        return NWCcomputed;
    }
    else{
        return "NWC cannot be calculated";
    }
}

async function NWCtoTotalAsset(companyname, balance_sheet){
    var NWC = await getNWC(companyname, balance_sheet);
    var totalAssets = await gettotalasset(companyname, balance_sheet);
    var NWCtoTotalAssetcomputed = [];
    if (NWC != "NWC cannot be calculated" && totalAssets != null){
        for(i=0; i < NWC.length; i++){
            NWCtoTotalAssetcomputed.push(NWC[i]/Number(totalAssets[i]));
        }
        return NWCtoTotalAssetcomputed;
    }
    else{
        return "NWC To Total Asset cannot be calculated";
    }
}

async function intervalMeasure(companyname, income_statement){
    var COGS = await getCOGS(companyname, income_statement);
    var operatingexpenses = await gettotaloperatingexpense(companyname, income_statement);
    var intervalMeasurecomputed = [];
    if (COGS != null && operatingexpenses != null){
        for(i=0; i< COGS.length; i++){
            console.log((Number(COGS[i]) + Number(operatingexpenses[i])));
            intervalMeasurecomputed.push((Number(COGS[i]) + Number(operatingexpenses[i]))/365);
        }
        return intervalMeasurecomputed;
    }
    else{
        return "Interval measure cannot be calculated";
    }
}


//financial leverage ratios below
async function totaldebtratio(companyname, balance_sheet){
    var totalAssets = await gettotalasset(companyname, balance_sheet);
    var totalequity = await gettotalequity(companyname, balance_sheet);
    var totaldebtratiocomputed = [];
    if (totalAssets != null && totalequity != null){
        for(i=0; i<totalAssets.length; i++){
            totaldebtratiocomputed.push((Number(totalAssets[i])-Number(totalequity[i])) / Number(totalAssets[i]));
        }
        return totaldebtratiocomputed;
    }
    else{
        return "Total debt ratio cannot be calculated";
    }
}

async function debtequityratio(companyname, balance_sheet){
    var totaldebt = await gettotalliabilities(companyname, balance_sheet);
    var totalequity = await gettotalequity(companyname, balance_sheet);
    var debtequityratiocomputed = [];
    if (totaldebt != null && totalequity != null){
        for(i=0; i<totaldebt.length; i++){
            debtequityratiocomputed.push(Number(totaldebt[i])/Number(totalequity[i]));
        }
        return debtequityratiocomputed;
    }
    else{
        return "Debt equity ratio cannot be calculated";
    }
}

async function equitymultiplier(companyname, balance_sheet){
    var totalAssets = await gettotalasset(companyname, balance_sheet);
    var totalequity = await gettotalequity(companyname, balance_sheet);
    var equitymultipliercomputed = [];
    if (totalAssets != null && totalequity != null){
        for(i=0; i<totalAssets.length; i++){
            equitymultipliercomputed.push(Number(totalAssets[i])/Number(totalequity[i]));
        }
        return equitymultipliercomputed;
    }
    else{
        return "Equity multiplier cannot be calculated";
    }
}


//coverage ratios below

async function interestcoverage(companyname, income_statement){
    var ebit = await getebit(companyname, income_statement);
    var interest = await getInterest(companyname, income_statement);
    var interestcoveragecomputed = [];
    if (ebit != null && interest!=null){
        for (i=0; i<ebit.length; i++){
            interestcoveragecomputed.push(Number(ebit[i])/Number(interest[i]));
        }
        return interestcoveragecomputed;
    }
    else{
        return "Interest coverages cannot be calculated";
    }
}

//inventory ratios below

async function inventoryTurnover(companyname, income_statement, balance_sheet){
    var COGS = await getCOGS(companyname, income_statement);
    var inventory = await getinventory(companyname, balance_sheet);
    var inventoryTurnovercomputed = [];
    if (COGS != null && inventory!= null){
        for (i=0; i<COGS.length; i++){
            inventoryTurnovercomputed.push(Number(COGS[i])/Number(inventory[i]));
        }
        return inventoryTurnovercomputed;
    }
    else{
        return "Inventory turnover cannot be computed";
    }
}

async function dayssalesininventory(companyname, income_statement, balance_sheet){
    var inventoryturnovers = await inventoryTurnover(companyname, income_statement, balance_sheet);
    var dayssalesininventorycomputed = [];
    if (inventoryturnovers != null){
        for(i=0; i<inventoryturnovers.length; i++){
            dayssalesininventorycomputed.push(365/inventoryturnovers[i])
        }
        return dayssalesininventorycomputed;
    }
    else{
        return "Days' sales in inventory cannot be calculated";
    }
}


//receivable ratios below
async function receivableturnover(companyname, income_statement, balance_sheet){
    var sales = await getrevenue(companyname, income_statement);
    var ar = await getAR(companyname, balance_sheet);
    var receivableturnovercomputed = [];
    if (sales != null && ar != null){
        for(i=0; i< sales.length; i++){
            receivableturnovercomputed.push(Number(sales[i])/Number(ar[i]));
        }
        return receivableturnovercomputed;
    }
    else{
        return "receivable turnovers cannot be computed";
    }
}

async function dayssalesinreceivables(companyname, income_statement, balance_sheet){
    var receivableturnovers = await receivableturnover(companyname, income_statement, balance_sheet);
    var dayssalesinreceivablescomputed = [];
    if (receivableturnovers != null){
        for(i=0; i<receivableturnovers.length; i++){
            dayssalesinreceivablescomputed.push(365/receivableturnovers[i])
        }
        return dayssalesinreceivablescomputed;
    }
    else{
        return "Days sales in receivables cannot be calculated";
    }
}


//payable ratios below

async function payableturnover(companyname, income_statement, balance_sheet){
    var COGS = await getCOGS(companyname, income_statement);
    var ap = await getAP(companyname, balance_sheet);
    var payableturnovercomputed = [];
    if (COGS != null && ap != null){
        for(i=0; i< COGS.length; i++){
            payableturnovercomputed.push(Number(COGS[i])/Number(ap[i]));
        }
        return payableturnovercomputed;
    }
    else{
        return "payable turnovers cannot be computed";
    }
}

async function dayspayableoutstanding(companyname, income_statement, balance_sheet){
    var payableturnovers = await payableturnover(companyname, income_statement, balance_sheet);
    var dayspayableoutstandingcomputed = [];
    if (payableturnovers != null){
        for(i=0; i<payableturnovers.length; i++){
            dayspayableoutstandingcomputed.push(365/payableturnovers[i]);
        }
        return dayspayableoutstandingcomputed;
    }
    else{
        return "Days payables cannot be calculated";
    }
}

//Asset turnover ratios below
async function totalAssetTurnover(companyname, income_statement, balance_sheet){
    var totalrevenue = await getrevenue(companyname, income_statement);
    var totalAssets = await gettotalasset(companyname, balance_sheet);
    var totalAssetTurnovercomputed = [];
    if (totalrevenue != null && totalAssets != null){
        for (i =0; i< totalrevenue.length; i++){
            totalAssetTurnovercomputed.push(Number(totalrevenue[i])/Number(totalAssets[i]));
        }
        return totalAssetTurnovercomputed;
    }
    else{
        return "Total asset turnovers cannot be calculated";
    }
}

async function NWCturnover(companyname, income_statement, balance_sheet){
    var NWCs = await getNWC(companyname, balance_sheet);
    var all_revenue = await getrevenue(companyname, income_statement);
    var NWCturnovercomputed = [];
    for (i =0; i < NWCs.length; i++){
        try{
            NWCturnovercomputed.push(Number(all_revenue[i])/ Number(NWCs[i]));
        } catch {
            NWCturnovercomputed.push("Cannot be calculated");
        }
        
    }
    return NWCturnovercomputed;
}

async function fixedAssetTurnover(companyname, income_statement, balance_sheet){
    var all_revenue = await getrevenue(cashratio, income_statement);
    var all_total_assets = await gettotalasset(companyname, balance_sheet);
    var all_current_assets = await getcurrentassets(companyname, balance_sheet);
    var fixedAssetTurnovercomputed = [];
    if (all_revenue != null && all_total_assets != null && all_current_assets!= null){
        for (i=0; i< all_revenue.length; i++){
            fixedAssetTurnovercomputed.push(Number(all_revenue[i])/(Number(all_total_assets[i]) - Number(all_current_assets[i])));
        }
        return fixedAssetTurnovercomputed;
    }
}

//profitability measures below

async function netprofitmargin(companyname, income_statement){
    var all_net_income = await getnetincome(companyname, income_statement);
    var all_revenue = await getrevenue(companyname, income_statement);
    var netprofitmargincomputed = [];
    if (all_net_income != null && all_revenue != null){
        for(i=0; i< all_net_income.length; i++){
            netprofitmargincomputed.push(Number(all_net_income[i])/Number(all_revenue[i]));
        }
        return netprofitmargincomputed;
    }
    else{
        return "Net profit margin cannot be calculated";
    }
}

async function roa(companyname, income_statement, balance_sheet){
    var totalAssets = await gettotalasset(companyname, balance_sheet);
    var all_net_income = await getnetincome(companyname, income_statement);
    var roaComputed = [];
    if(totalAssets != null && all_net_income!=null){
        for(i=0; i<totalAssets.length; i++){
            roaComputed.push(Number(all_net_income[i])/Number(totalAssets[i]));
        }
        return roaComputed;
    }
    else{
        return "Return on Assets cannot be calculated";
    }
}

async function roe(companyname, income_statement, balance_sheet){
    var totalequity = await gettotalequity(companyname, balance_sheet);
    var all_net_income = await getnetincome(companyname, income_statement);
    var roeComputed = [];
    if(totalequity != null && all_net_income!=null){
        for(i=0; i<totalequity.length; i++){
            roeComputed.push(Number(all_net_income[i])/Number(totalequity[i]));
        }
        return roeComputed;
    }
    else{
        return "Return on Equity cannot be calculated";
    }
}

//market value calculations below


async function getstockprices2(companyname){
    // var serviceURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + companyname + '&apikey=NBKV8YLSSH92V2LU';
    var serviceURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + companyname + '&apikey=164GD01KSMX23URK';
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
    //console.log(keys)
    return close;
}

async function getEPS(companyname){
    // var serviceURL = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + companyname + '&apikey=NBKV8YLSSH92V2LU';
    var serviceURL = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + companyname + '&apikey=UDKQ7NV2Z27YRJ9L';
    //console.log(serviceURL);
    var response = await fetch(serviceURL);
    var data = await response.json();
    var eps = await data.EPS;
    console.log(eps);
    return eps;
}

async function PEratio(companyname){
    var stockprices = await getstockprices2(companyname);
    var eps = await getEPS(companyname);
    var PEratiocomputed = [];
    for (i=0; i<stockprices.length; i++){
        PEratiocomputed.push(Number(stockprices[i])/Number(eps));
    }
    return PEratiocomputed;
}

async function marketobookratio(companyname, balance_sheet){
    var serviceURL = "http://127.0.0.1:9000/getmarketcap/" + companyname;
    var response = await fetch(serviceURL);
    var data = await response.json();
    var marketcap = data.Marketcapvalue;
    var totalequity = await gettotalequity(companyname, balance_sheet);
    console.log(marketcap);
    console.log(totalequity[0]);
    var equitynow = totalequity[0];
    
    var currentmarkettobookratio = Number(marketcap) / Number(equitynow);
    if(currentmarkettobookratio != null){
        return currentmarkettobookratio;
    }
    else{
        return "Cannot calculate market to book ratio";
    }
}




async function computeallratios(companyname){
    var balance_sheet_data = await getcompanybalancesheetjsondata(companyname);
    //console.log(balance_sheet_data);
    var income_statement_data = await getcompanyincomestatementjsondata(companyname);
    console.log(income_statement_data);
    //liquidity ratios here
    var currentratios = await currentratio(companyname, balance_sheet_data);
    var quickratios = await quickratio(companyname, balance_sheet_data);
    var cashratios = await cashratio(companyname, balance_sheet_data);
    var NWCtoTotalAssets = await NWCtoTotalAsset(companyname, balance_sheet_data);
    var intervelMeasures = await intervalMeasure(companyname, income_statement_data);

    //financial leverage ratios here
    var totaldebtratios = await totaldebtratio(companyname, balance_sheet_data);
    var debtequityratios = await debtequityratio(companyname, balance_sheet_data);
    var equitymultipliers = await equitymultiplier(companyname, balance_sheet_data);

    //coverage ratios here
    var interestcoverages = await interestcoverage(companyname, income_statement_data);
    

    //inventory ratios here
    var inventoryTurnovers = await inventoryTurnover(companyname, income_statement_data, balance_sheet_data);
    var dayssalesininventorys1 = await dayssalesininventory(companyname, income_statement_data, balance_sheet_data);

    //receivable ratios here
    var receivableturnovers = await receivableturnover(companyname, income_statement_data, balance_sheet_data);
    var dayssalesinreceivables1 = await dayssalesinreceivables(companyname, income_statement_data, balance_sheet_data);

    //payable ratios here
    var payableturnovers = await payableturnover(companyname, income_statement_data, balance_sheet_data);
    var dayspayableoutstanding1 = await dayspayableoutstanding(companyname, income_statement_data, balance_sheet_data);

    //asset turnover ratios here 
    var totalassetturnovers = await totalAssetTurnover(companyname, income_statement_data, balance_sheet_data);
    var NWCturnovers = await NWCturnover(companyname, income_statement_data, balance_sheet_data);
    var fixedAssetTurnovers = await fixedAssetTurnover(companyname, income_statement_data, balance_sheet_data);

    //profitability measures here
    var netprofitmargins = await netprofitmargin(companyname, income_statement_data);
    var roas = await roa(companyname, income_statement_data, balance_sheet_data);
    var roes = await roe(companyname, income_statement_data, balance_sheet_data);

    //market value measures here
    var peratios = await PEratio(companyname);
    var MTB = await marketobookratio(companyname, balance_sheet_data);

    var finaldata = {
        "CurrentRatio" : currentratios,
        "QuickRatio": quickratios,
        "NWCtoTotalAsset": NWCtoTotalAssets,
        "IntervalMeasure": intervelMeasures,
        "TotalDebtRatio": totaldebtratios,
        "EquityMultiplier": equitymultipliers,
        "InterestCoverage": interestcoverages,
        "InventoryTurnover":inventoryTurnovers,
        "DaysSalesInInventory": dayssalesininventorys1,
        "ReceivablesTurnover": receivableturnovers,
        "DaysSalesInReceivables": dayssalesinreceivables1,
        "PayableTurnovers": payableturnovers,
        "DaysPayableOutstanding": dayspayableoutstanding1,
        "TotalAssetTurnover": totalassetturnovers,
        "NWCTurnover" : NWCturnovers,
        "FixedAssetTurnover": fixedAssetTurnovers,
        "NetProfitMargin": netprofitmargins,
        "ReturnOnAsset": roas,
        "ReturnOnEquity": roes,
        "PriceEquityRatio": peratios,
        "MarketToBookRatio": MTB
    };

    //console.log(finaldata);
    return finaldata;
}

function initRatioNamesAndDesc() {
    var ratioInfo = {
        "CurrentRatio": ["Current Ratio", "Can the company cover its short term liabilities? Gives an idea of the short-term liquidity of the company."],
        "QuickRatio": ["Quick Ratio", "Quick ratio is current ratio but without taking into account inventory. Inventory might inflate values for retail companies/food companies."],
        "NWCtoTotalAsset": ["NWC to Total Asset", "Alternative way to measure short term liquidity."],
        "IntervalMeasure": ["Interval Measure", "How long the company can cover its operations based on its current assets."],
        "TotalDebtRatio": ["Total Debt Ratio", "Debt compared to assets."],
        "EquityMultiplier": ["Equity Multiplier", "1 + debt/equity ratio. Tells you the company's capital structure."],
        "InterestCoverage": ["Interest Coverage", "placeholder"],
        "InventoryTurnover": ["Inventory Turnover", "Tells you how many times the company sold (turned over) its inventory."],
        "DaysSalesInInventory": ["Days Sales In Inventory", "Number of days it took to sell inventory."],
        "ReceivablesTurnover": ["Receivables Turnover", "How many times the company collects its Accounts Receivables"],
        "DaysSalesInReceivables": ["Days Sales In Receivables", "How many days it takes to collect Accounts Receivables. You want this to be lower."],
        "PayableTurnovers": ["Payable Turnovers", "How many times the company pays its AP in a year."],
        "DaysPayableOutstanding": ["Days Payable Outstanding", "How many days it takes for the company to pay its suppliers. You want this to be higher."],
        "TotalAssetTurnover": ["Total Asset Turnover", "placeholder"],
        "NWCTurnover": ["NWC Turnover", "placeholder"],
        "FixedAssetTurnover": ["Fixed Asset Turnover", "placeholder"],
        "NetProfitMargin": ["Net Profit Margin", "placeholder"],
        "ReturnOnAsset": ["Return On Asset", "placeholder"],
        "ReturnOnEquity": ["Return On Equity", "placeholder"],
        "PriceEquityRatio": ["Price Equity Ratio", "placeholder"],
        "MarketToBookRatio": ["Market To Book Ratio", "placeholder"]
    };
    return ratioInfo;
}


async function constructRatioTable(companyList){
    const ratioInfo = initRatioNamesAndDesc();
    var data = {};

    htmlStr = `<table class="table">
    <thead class="thead-dark">
        <tr>
            <th></th>`;
    
    for (const companySymbol of companyList) {
        //console.log("Ran once");
        var companyData = await computeallratios(companySymbol);
        data[companySymbol] = companyData;
        // companyJSON = await getCompanyBySymbol(companySymbol);
        htmlStr += `<th>${companySymbol}</th>`;
        // htmlStr += `<th>${companyJSON.name}</th>`;
    }

    //console.log(data);

    htmlStr += `</tr></thead>`;
    
    Object.keys(ratioInfo).forEach(stat => {
        var statName = ratioInfo[stat][0];
        var statDesc = ratioInfo[stat][1];
        var popoverElement = createDescPopover(statDesc);
        htmlStr += `<tr><th>${statName} ${popoverElement}</th>`;
        companyList.forEach(symbol => {
            var value = data[symbol][stat];
            //console.log(value);
            if (value == undefined || value == null){
                value = "Not found";
                htmlStr += '<td>' + String(value) + "</td>";
            } else if (typeof(value) == 'number'){
                value = value.toFixed(5);
                htmlStr += '<td>' + String(value) + "</td>";
            } else if (Array.isArray(value) == true){
                //console.log("Number hit");
                //console.log(value[0]);
                var currentnumber = Number(value[0]); //getting the first "ratio" in the list for now. Can change from [0] (most current year) according to the year you want. E.G. [1] will be the previous year.
                htmlStr += '<td>' + String(currentnumber.toFixed(5)) + "</td>";
                //console.log(value1);
            }
            //htmlStr += '<td>' + String(value) + "</td>";
            //htmlStr += `<td>${data[symbol][stat]}</td>`;
            
        })
        htmlStr += "</tr>";
    })

    htmlStr += "</table>";
    //console.log(htmlStr);
    return htmlStr;
}

function createDescPopover(description){
    var popover = `<i class="far fa-question-circle"
    data-toggle="tooltip" data-placement="right" title="${description}"></i>`;
    return popover;
}