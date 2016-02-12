$(document).ready(function() {
  $('#tweet-controls').hide();
  $('.stats').hide();
  $('.reply').hide();
/*this grows and fades in the tweet-controls
for when clicked*/
  $('textarea').on('focus', function() {
    $(this).animate({height: '5em'}, 500)
    $(this).siblings('#tweet-controls').fadeIn();
  })
/*this shrinks the tweet box and hides the tweet-controls*/

  $('textarea').on('blur', function() {
    $(this).animate({height: '2.5em'}, 500)
    $('#tweet-controls').fadeOut();
  })
/*creating the counter for the tweet box, and making the function*/
$('textarea').on('keyup', function() {
   charNum = 140 - $('textarea.tweet-compose').val().length;
   $('#char-count').text(charNum);
   if (charNum <= 20) {
      $('#char-count').css({color: 'red'});
 }
    else if (charNum > 20) {
      $('#char-count').css({color: '#999'});
  }
})

$('textarea').on('keyup', function() {
    charNum = 140 - $('textarea.tweet-compose').val().length;
    $('#char-count').text(charNum);
    if (charNum < 0) {
      $('#tweet-submit').attr('disabled', 'disabled');
    }
     else {
       $('#tweet-submit').removeAttr('disabled');
     }
})
/*this prepends the new tweet into the feed
so it can be altered and what not!*/

$('#tweet-submit').on('click', function() {
  $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/hat.jpg" /><strong class="fullname">Trevor Casey </strong><span class="username">@tcasey</span><p class="tweet-text">'

   + $('textarea.tweet-compose').val() +

   '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="time">'


   +

   '</div></div>');


  $('textarea.tweet-compose').val('');
          /*this wilil make the tweet-actions show and hide!*/
          $('.tweet').on('mouseenter', function() {
            $(this).find('.tweet-actions').slideDown();
          })
          $('.tweet-actions').hide();
          $('.tweet').on('mouseleave', function() {
            $(this).find('.tweet-actions').slideUp();
          })
          /*show & hide retweets and timestamp*/
          $('.stats').hide();
          $('.tweet').on('mouseenter', function() {
            $(this).find('.stats').slideDown();
          })
          $('.tweet').on('mouseleave', function() {
            $(this).find('.stats').slideUp();
          })
})
/*this crap makes the tweet-actions show and hide*/
$('.tweet').on('mouseenter', function() {
  $(this).find('.tweet-actions').slideDown();
})
$('.tweet-actions').hide();
$('.tweet').on('mouseleave', function() {
  $(this).find('.tweet-actions').slideUp();
})
/*show & hide retweets and timestamp*/
$('.tweet').on('mouseenter', function() {
  $(this).find('.stats').slideDown();
})
$('.tweet').on('mouseleave', function() {
  $(this).find('.stats').slideUp();
})
/*show and hide reply box*/
$('.tweet').on('mouseenter', function() {
  $(this).find('.reply').slideDown();
})
$('.tweet').on('mouseleave', function() {
  $(this).find('.reply').slideUp();
})
})
