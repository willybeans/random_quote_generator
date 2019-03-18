$(document).ready(function() {
  newQuote();
  $(".newQuote").on('click', newQuote);
}); 

function newQuote () {
  let quoteData = [];
  let quoteText;
  let quoteAuthor;
  $.ajax({
    dataType: "json",
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function( data ) {
      quoteData = data.shift();
      quoteText = quoteData.content;
      quoteAuthor = quoteData.title;
      $(".quoteMark").addClass("fa-quote-left");
      $(".quoteAuthor").text(" -- " + quoteAuthor);
      $(".quoteContent").html(quoteText);
      console.log(quoteData);
     },
     error: function(xhr, status, error) {
        console.log("error");
     },
     cache: false //this is important
  });
}
function tweet() {
  let content = $(".quoteContent").text();
  let author = $(".quoteAuthor").text();
  let text = content + author;
  let url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
  window.open(url);
  return false;
}
