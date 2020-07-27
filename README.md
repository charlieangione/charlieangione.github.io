# Algolia Project

## [charlieangione.github.io](https://charlieangione.github.io/)

The goal of this project was to index data and configure relevance settings using Algolia's API, then create a searchable user interface for users to query the data.

## Process

I began this project by choosing a dataset provided by Algolia (airports.json), then writing a simple node server to index and send the data to my Algolia account (R9O8ZZFFQJ).

I followed Algolia's documentation, as well as [this medium article](https://medium.com/getstream-io/algolia-review-a-hosted-search-api-reviewed-de7abeeb1a67) and [Algolia's NPM package docs](https://www.npmjs.com/package/algoliasearch) to create an index called 'Airports' and send the JSON file to my account. I then added code to configure the relevance settings for searchable attributes, custom ranking, and typo tolerance. All of this can be found on the app.js file.

I then followed the docs and examples for Instantsearch.js to create my user interface. The code for this can be found on the index.html and search.js files. I added some additional styling which can be found on the search.css file.

## Thoughts & Feedback

The index.html example I found [here](https://www.algolia.com/doc/guides/getting-started/quick-start/tutorials/quick-start-with-the-api-client/javascript/?language=javascript) didn't quite work for me. My search results (hits) were appearing as empty templates. Moving the attributes from the "hit-template" script on the index.html file to the addWidgets function on the search.js file resolved the issue:

```
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
      }
 ```

I later found an example of the above [here](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/#customize-hits-and-add-a-final-touch).

This was a very fun project to work on and great hands-on experience with Algolia! Looking back I would have changed the dataset I used to an option with better booleans and numeric values to use for custom ranking.

## Answers to [customer questions](https://github.com/algolia/solutions-hiring-assignment/blob/master/customer-questions.md)

### Question 1:

Hi George, 

Happy to help clarify these items to make your onboarding process a smooth one:

Records are the objects your users are searching for, and each record contains attributes that provide additional detail about them. For example, a record could be a product, and each product has a name, price, category, customer rating, etc.

Indexing is the process of defining your records and storing them in silos to keep datasets organized. For example you may have an 'Airports' index containing info about airports, as well as a 'Restaurants' index containing info about restaurants.

Custom Ranking allows you to take any boolean or numeric attribute associated with your records and use those attributes to control which records appear in the top of a user's search results. For example, if users are searching for books by a specific author, and each book has a customer rating attributed to it, you could use custom ranking to ensure the books with the highest customer rating appear at the top. Common examples of attributes used for custom ranking include, customer rating, price, popularity, quantity.

### Question 2:

Hi Matt,

Thanks for reaching out, all product feedback is welcomed and appreciated, and I'm happy to pass this along to our team. I'm sorry to hear you feel inconvenienced by the new dashboard design, I know changes can be frustrating at first. If changing and deleting indexes is something you're planning to do regularly when iterating we may want to explore doing so [via the API](https://www.algolia.com/doc/api-reference/api-methods/delete-index/?language=javascript). There are ways to accomplish this behind the scenes and eliminate the several clicks in between. Let me know what you think, happy to jump on a call to discuss.

### Question 3:

Hi Leo,

Glad to hear you're looking to integrate Algolia with your website! Fortunately we've laid a great foundation for you to get started with our [Instantsearch UI library](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/) that helps you build a search user interface within your website.

At a high level, we provide you with you with a variety of predefined widgets (ex: search bar) that you can configure and place within your website's UI. You also have the ability to [create custom widgets](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/#creating-custom-widgets) which give you full control over the UI component and its output. You can also control the output for our predefined widgets.

Here's a [JavaScript example of configuring your Instantsearch instance](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/#using-widgets), which is where you'll add and create all of your widgets and also controls the communication between your website and Algolia.

This should get you started, and please let me know if you have any additional questions about the process.
