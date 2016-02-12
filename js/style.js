$(document).ready(function(){
//Open and close the box.
//***Need to return box to original height after tweet.***
  $('.tweet-compose').on('click', function() {
   $(this).height("80px");
   $('#tweet-controls').css("display", "block");
 });
 $('.tweet-compose').dblclick('click', function(){
   $(this).height("20px");
 });
//Twitter char-count now turns red with 20 instead of 10 remaining characters
//The purpose of this event is to count characters and trigger the color red and grey respectively, depending on the user input.
$('#textArea').bind('keyup keydown', function() {
  //After binding keyup and keydown, this allows the maxCharacters to determine which part of the if else if statement will work.
  var maxCharacters = 140;
  $('#char-count').text(maxCharacters);
  //  var count = $('#char-count');
   var characters = $(this).val().length;
   if (characters > maxCharacters - 20) {
    $('#char-count').css("color", "red");
       // $('#tweet-submit').addClass('button');
   }
   else{
     $('#char-count').css("color", "#999");
   };

   if (characters > maxCharacters){
    $('#tweet-submit').addClass('disable');
   }
   else {
       $('#tweet-submit').removeClass('disable');
       $('#tweet-submit').addClass('button');
     }
    $('#char-count').text(maxCharacters - characters);
});
//Take the content of the tweet and prepend to the top of the stream so people know what you are trying to tell them when you click tweet.

$('#tweet-submit').on('click',function(){
  var tweetChar = $('#textArea').val().length;
  if(tweetChar <= 140) {
  $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Trevor Casey</strong><span class="username">@tcasey</span><p class="tweet-text">'

/*-----Making the text value live----- */
   + $('textarea.tweet-compose').val() +


   '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="time">'

/*-----Making the time stamp live----- */
   +  \ +

   '</div></div>');

};


});

});
