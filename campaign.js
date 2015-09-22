/**
 * Created by aljonp on 9/22/15.
 */
var sampleData = campaignContributions.slice(0, 10);


function groupCampaign(data) {
  return _.pick(data, 'Party', 'Amount');
}

function currencyToNum(currencyString) {
  return Number(currencyString.replace(/[^0-9\.]+/g,""));
}

function addTotal(memo, cont) {
  return memo + currencyToNum(cont["Amount"]);
}




console.log(groupCampaign(campaignContributions));