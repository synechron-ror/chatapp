// handles the enter key condition when using chat
if ($.browser.mozilla) {
  $('#message_content').keypress(checkForEnter);
} else {
  $('#message_content').keydown(checkForEnter);
}

			   
function checkForEnter(event) {
       
	if(event.keyCode == 13) { //Enter keycode
	   $('form#new_message').submit();
	   $('#message_content').val('');  
	}
}
 
