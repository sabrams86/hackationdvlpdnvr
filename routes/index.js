var express = require('express');
var router = express.Router();
var unirest = require('unirest');

router.get('/', function(req, res, next) {
  var title = []
  unirest.get('https://www.reddit.com/subreddits.json')
  .end(function (response) {
    var body = JSON.parse(response.raw_body);
    var title = []
    body.data.children.forEach(function (subreddits) {
      title.push(subreddits.data.url)
    })
    title.forEach(function (subreddit) {

    })
    unirest.get('https://www.reddit.com'+ title[0].toString()  + '.json')
    .end(function (response) {
      var titles = []
      databody = JSON.parse(response.raw_body)
      databody.data.children.forEach(function (tops) {
        titles.push(tops.data.title)
      })
      console.log(titles);
      res.render('index', { title: 'Express' });
    })
  });
});

var titlecall = function (title) {

}

module.exports = router;
