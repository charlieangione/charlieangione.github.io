const searchClient = algoliasearch("R9O8ZZFFQJ", "a93fc6373851e2db070207ae183a3c83");
// const instantsearch = require('instantsearch.js');

const search = instantsearch({
    indexName: 'Airports',
    searchClient,
    routing: true,
  });
  
  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 25,
    })
  ]);
  
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search for any airport by name, city, or country',
    })
  ]);
  
  search.addWidgets([
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: `
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}},
            {{#helpers.highlight}}{ "attribute": "city" }{{/helpers.highlight}},
            {{#helpers.highlight}}{ "attribute": "country" }{{/helpers.highlight}}
            `,
        empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
      },
    })
  ]);
  
  search.start();