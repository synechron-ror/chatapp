// handles the enter key condition when using chat

$('#message_content').bind('keydown', function(e) {
        var code = (e.keyCode || e.which);
	if(code == 13) { //Enter keycode
	   $('form#new_message').submit();
	   $('#message_content').val('');  
	}
});
 
function setScroll() {
  $('#chat').attr('scrollTop', $('#chat').attr('scrollHeight'));
}