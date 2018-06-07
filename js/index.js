

$( document ).ready(function() {

    resultJson = '[{"title":"Google Maps","image":"https://seeklogo.com/images/N/new-google-maps-icon-logo-263A01C734-seeklogo.com.png"},{"title":"Twilio","image":"https://www.gfxmag.com/wp-content/uploads/2016/07/twilio-vector-logo.png"}]';
    result = JSON.parse(resultJson);
    console.log(result[0]);
    for (var i = 0; i < result.length; i++) {
      $('.search-results').append("<a class='result' id='result-"+i+"'><img src='"+ result[i].image +"' alt='' class='result__picture'/><div class='result__details'>"+result[i].title+"</div></a>");
    }
});

$('.search__section').click(function() {
  event.stopPropagation();
  $('.postbox').addClass('active');
  $(this).children("input").focus();
  $('.search-results').addClass('active');
  if($(".postbox input").val().length >= 1) {
      $('#example-result').addClass('hidden');
    } else {
      $('#example-result').removeClass('hidden');
    }
});

$(window).click(function() {
  $('.postbox').removeClass('active');
  $('.search-results').removeClass('active');
});

$(".postbox input").keyup(function() {
    if($(".postbox input").val().length >= 1) {
      $('#example-result').addClass('hidden');
    } else {
      $('#example-result').removeClass('hidden');
    }
});

$(document).on("click", ".result", function (e) {
            console.log(e.target.id+" clicked");
        });
