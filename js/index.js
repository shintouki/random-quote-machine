window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };

        return t;
      } (document, "script", "twitter-wjs"));

$(document).ready(function() {

  var quotes = [
    [
      "Isaac Asimov", "People who think they know everything are a great annoyance to those of us who do."
    ],
    [
      "Alice Roosevelt Longworth", "If you haven't got anything nice to say about anybody, come sit next to me."
    ],
    [
      "Elbert Hubbard", "Do not take life too seriously. You will never get out of it alive."
    ],
    [
      "Margaret Mead", "Always remember that you are absolutely unique. Just like everyone else."
    ],
    [
      "W. H. Auden", "We are all here on earth to help others; what on earth the others are here for I don't know."
    ],
    [
      "Mark Twain", "Get your facts first, then you can distort them as you please."
    ],
    [
      "Ron White", "I believe that if life gives you lemons, you should make lemonade... And try to find somebody whose life has given them vodka, and have a party."
    ],
    [
      "Don Marquis", "Procrastination is the art of keeping up with yesterday."
    ],
    [
      "Oscar Wilde", "I can resist everything except temptation."
    ],
    [
      "Albert Einstein", "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity."
    ],
    [
      "Robin Williams", "I'm sorry, if you were right, I'd agree with you."
    ],
    [
      "Winston Churchill", "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly."
    ],
    [
      "Douglas Adams", "I love deadlines. I like the whooshing sound they make as they fly by."
    ],
    [
      "Theodore Roosevelt", "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month."
    ],
    [
      "Franklin P. Jones", "One advantage of talking to yourself is that you know at least somebody's listening."
    ],
    [
      "Oscar Levant", "Roses are red, violets are blue, I'm schizophrenic, and so am I."
    ],
    [
      "Yogi Berra", "I never said most of the things I said."
    ],
    [
      "Abraham Lincoln", "No man has a good enough memory to be a successful liar."
    ],
    [
      "Laurence J. Peter", "If two wrongs don't make a right, try three."
    ],
    [
      "Steve Martin", "A day without sunshine is like, you know, night."
    ],
    [
      "Henry A. Kissinger", "There cannot be a crisis next week. My schedule is already full."
    ],
    [
      "Jim Carrey", "Behind every great man is a woman rolling her eyes."
    ],
    [
      "Mitch Hedberg", "My fake plants died because I did not pretend to water them."
    ],
    [
      "Aubrey Adamczyk", "Misha copied my chair."
    ]
  ];

  //document.getElementById("new_quote_button").addEventListener("click", createTweetButton);

  var numOfQuotes = quotes.length;
  var currQuote = "";
  var currName = "";

  $("#new_quote_button").on("click", function() {

    // After clicking on new quote, remove old tweet button
    var elem = document.getElementById("tweet_div");
    elem.removeChild(elem.childNodes[0]);

    var randomIndex = Math.floor(Math.random() * numOfQuotes);
    currQuote = '" ' + quotes[randomIndex][1];
    currName = "- " + quotes[randomIndex][0];

    $("#quote").html(currQuote);
    $("#name").html(currName);
    createTweetButton();
  });

  var randomIndex = Math.floor(Math.random() * numOfQuotes);
  currQuote = '" ' + quotes[randomIndex][1];
  currName = "- " + quotes[randomIndex][0];

  $("#quote").html(currQuote);
  $("#name").html(currName);
  createTweetButton();

  function createTweetButton() {
    var twitterShare = document.createElement("a");
    twitterShare.setAttribute("href", "https://twitter.com/intent/tweet");
    twitterShare.setAttribute("class", "twitter-share-button");
    twitterShare.setAttribute("id", "tweet_button");
    twitterShare.setAttribute("data-text", currQuote + " " + currName + " #quotes");

    tweetDivider = document.getElementById("tweet_div");
    tweetDivider.setAttribute("style", "margin-left: 30px; float: left");
    tweetDivider.appendChild(twitterShare);

    twttr.widgets.load();
  }

});
