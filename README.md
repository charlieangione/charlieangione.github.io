# Algolia Project

## [charlieangione.github.io](https://charlieangione.github.io/)

The goal of this project was to index data and configure relevance settings using Algolia's API, then create a searchable user interface for users to query the data.

## Process

I began this project by chosing a dataset provided by Algolia (airports.json), then writing a simple node server to index and send the data to my Algolia account (R9O8ZZFFQJ).

I followed Algolia's documentation as well as [this medium article](https://medium.com/getstream-io/algolia-review-a-hosted-search-api-reviewed-de7abeeb1a67) and [Algolia's NPM package docs](https://www.npmjs.com/package/algoliasearch) to create an index called 'Airports' and and send the JSON file to my account. I then added code to configure the relevance settings for searchable attributes, custom ranking, and typo tolerance. All of this can be found on the app.js file.
