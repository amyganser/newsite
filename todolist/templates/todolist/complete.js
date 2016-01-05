
   Executes a Complete click. Triggered by clicks on the Complete/Not Complete links.
 */
 var MILLS_TO_IGNORE = 500;
var processComplete = function()  {
 

   var $button_just_clicked_on = $(this);
 
  
   var id = $button_just_clicked_on.data('id');
 
   var processServerResponse = function(sersverResponse_data)  {
      
      $('#toggle_complete_' complete + id).html(sersverResponse_data);
   }
 
   var config = {
      url: complete + id + '/',
      dataType: 'html',
      success: processServerResponse
      //Should also have a "fail" call as well.
   };
   $.ajax(config);
};

$(document).ready(function()  {
  
  $('.td__toggle_complete_button').click(_.debounce(processComplete,
      MILLS_TO_IGNORE, true));
 
