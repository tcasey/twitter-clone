$(document).ready(function() {

  var maxCharacters = 140;
  var characters = $('#textArea').val().length;
/* ---------Double Height of box & show tweet controls----- */
  $('.tweet-compose').on('click', function() {
    $(this).height("80px");
    $('#tweet-controls').css("display", "block");
  });
  /*----------Return Box to original height value on some event (Added Feat.)---------*/
  $('.tweet-compose').on('dblclick', function() {
    $(this).height("23px");
  })

  $('#char-count').text(maxCharacters);
/*--------changed id of textarea to make the count specific--------*/
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
