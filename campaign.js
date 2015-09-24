/**
 * Created by aljonp on 9/22/15.
 */
var sampleData = campaignContributions.slice(0, 10);


/* Create a function called contributionsByParty(data) that can be passed
 * campaignContributions and that returns an object specifying a party
 * and the total amount of money they received in contributions.
 * For example: {Democrat: 3038674.969999999, Republican: 187827.87,
 * Non-Partisan: 498217.2000000001, Independent: 35350, Green: 2000}
 */
function currencyToNum(currencyString) {
  return Number(currencyString.replace(/[^0-9\.]+/g,""));
}

function addAmount(memo, person) {
  return memo + currencyToNum(person["Amount"]);
}


function groupByParties(data) {
  return _.groupBy(data, "Party");
}

function contributionsByParty(data) {
  return _.mapObject(groupByParties(data),
      function(val, key) {
        return _.reduce(val, addAmount, 0);
      });
}

console.log(contributionsByParty(campaignContributions));



/*
 * Create a function called maxContributionsToParty(data) that can be passedcampaignContributions
 * and that returns an object with keys party and amount, and whose values are the party
 * who received the maximum contributions.
 * For example: {party: "Democrat", amount: 3038674.969999999}.
 */
function partiestoObject(data) {
  var contributions = contributionsByParty(data);
  return _.map(_.keys(contributions),
        function (key) {
          return {party: key, amount: contributions[key]};
        });
}

function maxContributionsToParty(data) {
  return _.max(partiestoObject(data), function(party) {
    return party.amount;
  });
}

console.log(maxContributionsToParty(campaignContributions));