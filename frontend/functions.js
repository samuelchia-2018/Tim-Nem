async function getcompanybalancesheetjsondata(companyname){
    var serviceURL = "https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=" + companyname+"&apikey=demo";
    var companyfinancialdatajson = await fetch(serviceURL, {method: 'GET'});
    var data = await companyfinancialdatajson.json();
    return data;
}

async function getcompanyincomestatementjsondata(companyname){
    var serviceURL = "https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=" + companyname+"&apikey=demo";
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
    console.log(balance_sheet);
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
    for(var i=0; i<annual_reports.length; i++){
        if(annual_reports[i].totalRevenue != null){
            all_revenue.push(annual_reports[i].totalRevenue);
        }
    }
    return all_revenue;    
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
            intervalMeasurecomputed.push((Number(COGS[i])+Number(operatingexpenses[i]))/365);
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
        return interestcoveragecomputed[i];
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
        for(i=0; i<dayssalesinreceivables[i]; i++){
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


async function computeallratios(companyname){
    var balance_sheet_data = await getcompanybalancesheetjsondata(companyname);
    console.log(balance_sheet_data);
    var income_statement_data = await getcompanyincomestatementjsondata(companyname);
    console.log(income_statement_data);
    //liquidity ratios here
    var currentratios = await currentratio(companyname, balance_sheet_data);
    var quickratios = await quickratio(companyname, balance_sheet_data);
    var cashratios = await cashratio(companyname, balance_sheet_data);
    var NWCtoTotalAssets = await NWCtoTotalAsset(companyname, balance_sheet_data);
    var intervelMeasures = await intervalMeasure(companyname, balance_sheet_data);

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
        "DaysPayableOutstanding": dayspayableoutstanding1
    };

    console.log(finaldata);
    return finaldata;
}

function testfunction(){
    console.log("test");
}