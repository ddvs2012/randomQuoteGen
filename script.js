 /*$(document).ready(function() {
    // Only change code below this line.
    $("#quoteBoxTwo").on("click", function(){
		newQuote = Math.floor(Math.random() * quotes.length);
		$(".message").html(quotes[newQuote]);
    });
    // Only change code above this line.
  });
  
$(document).ready(function() {
	 $("#clickableAwesomeFont").on("click", function(){
		 location.href = "https://twitter.com/intent/tweet"
	 });
 });
 

  quotes = [
	"Wine is constant proof that God loves us and loves to see us happy. ",
  
	"By failing to prepare, you are preparing to fail. ",
	
	"Without continual growth and progress, such words as improvement, achievement, and success have no meaning. ",
	"Early to bed and early to rise makes a man healthy, wealthy and wise.",
	"Money has never made man happy, nor will it, there is nothing in its nature to produce happiness. The more of it one has the more one wants. ",
	"Whatever is begun in anger ends in shame."
	
  ]
  */

  function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }


var currentQuote = '', currentAuthor = '';
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
      if(inIframe())
      {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + authors[newAuthor]));
      }
      $("#quoteText").animate({
          opacity: 100
        }, 500,
        function() {
          $('#quoteText').html(r.quote);
        });

      $("#author").animate({
          opacity: 100
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(authors[newAuthor]);
        });

     
    }
  });
}
$(document).ready(function() {
  getQuote();
  $('#getMessage').on('click', getQuote);
  $('#tweet').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + "Benjamin Franklin"));
    }
  });
    var authors = [
  '-Nelson Mandela',
  '-Benjamin Franklin'
  ];
  
  $('#getMessage').on("click", function(){
		newAuthor = Math.floor(Math.random() * 2);
		$("#author").html(authors[newAuthor]);
    });
  
});