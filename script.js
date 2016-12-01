 $(document).ready(function() {
    // Only change code below this line.
    $("#getMessage").on("click", function(newQuote){
		newQuote = Math.floor(Math.random() * quotes.length);
		$(".message").html(quotes[newQuote]);
    });
    // Only change code above this line.
  });
  
  quotes = [
	"Wine is constant proof that God loves us and loves to see us happy. ",
  
	"By failing to prepare, you are preparing to fail. ",
	
	"Without continual growth and progress, such words as improvement, achievement, and success have no meaning. ",
	"Early to bed and early to rise makes a man healthy, wealthy and wise.",
	"Money has never made man happy, nor will it, there is nothing in its nature to produce happiness. The more of it one has the more one wants. ",
	"Whatever is begun in anger ends in shame."
	
  ]