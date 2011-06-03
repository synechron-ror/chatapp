// handles the enter key condition when using chat

$('#message_content').bind('keypress', function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
	if(code == 13) { //Enter keycode
	   $('form#new_message').submit();
	   $('#message_content').val('');  
	}
});
 
