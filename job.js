var Twit = require('twit')
var moment = require('moment')
var fs = require('fs')
var path = require('path')
var Rx = require('rx')
var Boilerpipe = require('boilerpipe')
var secret = require('./secret.json')
var T = new Twit({
    consumer_key:         secret.consumer_key
  , consumer_secret:      secret.consumer_secret
  , access_token:         secret.access_token
  , access_token_secret:  secret.access_token_secret
})
var exec = require('child_process').exec

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

T.get('statuses/user_timeline', { screen_name : 'mister_hex', count: 200 }, function(err, tweets) {

  if (err)
    console.log(err)

    var published = Rx.Observable.create(function (observer) {
    var stream = T.stream('user')
    
    stream.on('tweet', function (tweet) {
      observer.onNext(tweet);
    })

    tweets.forEach(function (tweet) {
      observer.onNext(tweet);
    })
  })
  .where(function(tweet){return tweet.user.screen_name == 'mister_hex'})
  .publish();

  published.throttle(15000).subscribe(function(_){ gitCommit()})
  published.subscribe(function (tweet) { if (tweet && tweet.text) {writeToMarkDown(tweet)}})

  published.connect()

});

function gitCommit()
{
  exec('git add -A',
    function (error, stdout, stderr) {
      console.log(stdout);
      exec('git commit -m updatesCommit',function (error, stdout, stderr) 
      {
        console.log(stdout);
        exec('git push',function (error, stdout, stderr) 
        {
          console.log(stdout);
          console.log('pushed updates to git.')
        })
      })
  });
}

function writeToMarkDown(tweet)
{
  var fileName = getMarkDownFileName(tweet)
  var title = guessTitle(tweet.text)

  var urlPattern = 'http[s]?://[^\s<>"]+|www\.[^\s<>"]+'
  var extractedUrls = tweet.text.match(urlPattern)

  if (tweet && tweet.text && extractedUrls && extractedUrls[0])
  {
    var extractedUrl = extractedUrls[0]
    if (extractedUrl.split(' ').length > 0)
    {
        extractedUrl = extractedUrl.split(' ')[0]
    }

    console.log('calling url ' + extractedUrl +' for article')
    
    var boilerpipe = new Boilerpipe({
    extractor: Boilerpipe.Extractor.Article,
    url: extractedUrl});

    boilerpipe.getText(function(err, text) {

      if (!title && text)
      { 
        title = guessTitle(text).split('-').slice(0,8).join('-')

        if (fileName.indexOf('untitled') != -1)
        {
          fileName = fileName.replace('untitled',title)
        }
      }

      if (text)
      {
        text = text.split('\n')
        .map(function(s){return s.replace(/[^a-zA-Z0-9,.!?'- ]{1,}/g,"")})
        .join('\n\n')
        .split('\n')
        .join('\n')

        var text = "*taken from [" + extractedUrl +"](" + extractedUrl +")*" + '\n' + text

        var contentArr = [];
        contentArr.push(
        "---",
        "layout: post",
        "title: " + title.replace(/[-]{1,}/g,"").toLowerCase(),
        "categories:",
        "- tweets",
        "---",
        text)

        var content = contentArr.join("\n");

        var filePath = path.join(__dirname ,'/_posts',fileName);
        
        fs.exists(filePath, function(exists) 
        {
          if (!exists) 
          {
            fs.writeFile(filePath, content, function (err) 
            {
              if (err) console.log(err)
              console.log(fileName +' saved!');
            });
          }
          else
          {
            console.log(fileName + ' already processed before');
          }
        });
      }

      
    });
  }
}

function getMarkDownFileName(tweet)
{
  var date = parseTwitterDate(tweet.created_at)
  var datePortion = moment(date).format('YYYY-MM-DD')
  var fileName = datePortion + '-' + tweet.text + '.md'

  var title = guessTitle(tweet.text)

  if (title)
    return datePortion + '-' + title + '.md'
  else
    return datePortion + '-' + 'untitled' + '.md'
}

function parseTwitterDate(aDate)
{   
  return new Date(Date.parse(aDate.replace(/( \+)/, ' UTC$1')));
  //sample: Wed Mar 13 09:06:07 +0000 2013 
}

function guessTitle(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    text = text.replace(exp, "");
    exp = /(^|\s)#(\w+)/g;
    text = text.replace(exp, "");
    exp = /(^|\s)@(\w+)/g;
    text = text.replace(exp, "");
    exp = /[&\/\\#,+()$~%.'":*?<>{}]/g,''
    text = text.replace(exp, "");
    exp = /[^a-zA-Z0-9]{1,}/g;
    text = text.replace(exp, " ");

     var tokens = text.split(' ')
    tokens.map(function(token)
    {
      return token.replace(' ',"").trim()
    })
    .filter(function(token){return token !== ""})
    text = tokens.join('-')
    text = text.trim()

    if (text.charAt(text.length-1) == '-')
    {
        text = text.substring(0, text.length - 1)
    }

    return text;
}


function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};

function guid() {
  return s4() + s4() + s4() + s4();
}