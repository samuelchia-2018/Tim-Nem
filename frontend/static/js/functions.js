async function getAllIndustries() {
    var timNemURL = "http://timnem.tk/api/industries";
    var industriesJSON = await fetch(timNemURL, {method: "GET"});
    var data = await industriesJSON.json();
    return data;
}

async function getAllCompanies() {
    var timNemURL = "http://timnem.tk/api/companies";
    var companiesJSON = await fetch(timNemURL, {method: "GET"});
    var data = await companiesJSON.json();
    return data;
}

async function getCompanyBySymbol(symbol) {
    var timNemURL = `http://timnem.tk/api/companies/symbol/${symbol}`;
    var companyJSON = await fetch(timNemURL, {method: "GET"});
    var data = await companyJSON.json();
    return data;
}

async function searchCompaniesBySymbol(symbol) {
    var timNemURL = `http://timnem.tk/api/companies/search/symbol/${symbol}`;
    var companiesJSON = await fetch(timNemURL, {method: "GET"});
    var data = await companiesJSON.json();
    return data;
}

async function getCompaniesByIndustry(industry) {
    var timNemURL = `http://timnem.tk/api/companies/industry/${industry}`;
    var companiesJSON = await fetch(timNemURL, {method: "GET"});
    var data = await companiesJSON.json();
    return data;
}

$(document).on('click','#searchbtn',function(){
    var selectedIndustry = $("#searchMenu").val();
    localStorage.setItem('selectedIndustry',selectedIndustry);
    window.location.href='./search.html';
});