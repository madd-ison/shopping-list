$(document).ready(function() {
$("#js-shopping-list-form").on('.submit', function(e){
	var text = $('#shopping-list-entry').val();
  $('.shoppingList').append($('<li>').append(text));
  $('#shopping-list-entry').val('');
  e.preventDefault();
});
});

$('.shopping-item-delete').on('click', 'li', function(){
	$(this).remove();
});
