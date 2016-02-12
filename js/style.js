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
});
