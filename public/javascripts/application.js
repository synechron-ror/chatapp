// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
 $(function() {  
   var faye = new Faye.Client('http://localhost:8000/faye');  
   faye.subscribe('/messages/new', function (data) {  
     alert(data);  
   });  
 });  