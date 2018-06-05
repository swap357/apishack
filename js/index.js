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