/* Scraper Template  (18.10) 
 * ========================= */


// Students: Using this skeleton, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save it in a result array, and log it to the console.


// Dependencies:

// Snatches HTML from URLs
var request = require('request');
// Scrapes our HTML
var cheerio = require('cheerio');

// Make a request call to grab the HTML body from the site of your choice
request('https://toptropicals.com/cgi-bin/store/store.cgi?group=mango', function (error, response, html) {

	// Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var result = [];

  // Select each instance of the HTML body that you want to scrape
  // NOTE: Cheerio selectors function similarly to jQuery's selectors, 
  // but be sure to visit the package's npm page to see how it works
  $("span.PR_GotoPageClass").each(function(i, element){

    var link = $(element).children().attr("href");
    var content = $(element).children().text();

    // Save these results in an object that we'll push into the result array we defined earlier
    result.push({
      link: link,
      content: content
    });
    });
  console.log(result);
});


// Dutchman's Pipe, Pelican Flower - Aristolochia spp..
// Among tropical vines, these plants are absolute winners - curious flower, super fast growth rate and very good cold tolerance. Once you plant it, you have it!

db.myanimals.insert({
  "name": "Panda",
  "numlegs": 4,
  "class": "mammal",
  "weight": 254,
  "whatIWouldReallyCallIt": "Captain Fuzzy Face"
})


{
  "name": "flamingo",
  "numlegs": 2,
  "class": "avian",
  "weight": 50,
  "whatIWouldReallyCallIt": "Violet"
},

{
  "name": "cat",
  "numlegs": 4,
  "class": "mammal",
  "weight": 15,
  "whatIWouldReallyCallIt": "Buddy"
},

{
  "name": "cat",
  "numlegs": 4,
  "class": "mammal",
  "weight": 15,
  "whatIWouldReallyCallIt": "Kisses"
}

{
  "name": "Panda",
  "numlegs": 4,
  "class": "mammal",
  "weight": 254,
  "whatIWouldReallyCallIt": "Captain Fuzzy Face"
}