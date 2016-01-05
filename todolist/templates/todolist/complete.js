/*
  This file must be imported immediately-before the close-</body> tag,
  and after JQuery and Underscore.js are imported.
/**
   Executes a Complete click. Triggered by clicks on the Complete/Not Complete links.
 */
 var MILLS_TO_IGNORE_LIKES = 500;
var processComplete = function()  {
 
   //In this scope, "this" is the button just clicked on.
   //The "this" in processServerResponse is *not* the button just clicked
   //on.
   var $button_just_clicked_on = $(this);
 
   //The value of the "data-color_id" attribute.
   var id = $button_just_clicked_on.data('id');
 
   var processServerResponse = function(sersverResponse_data, textStatus_ignored,
                            jqXHR_ignored)  {
      //alert("sf sersverResponse_data='" + sersverResponse_data + "', textStatus_ignored='" + textStatus_ignored + "', jqXHR_ignored='" + jqXHR_ignored + "', id='" + id + "'");
      $('#toggle_complete_' + id).html(sersverResponse_data);
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
  /*
    There are many buttons having the class
 
      td__toggle_complete_button
 
    This attaches a listener to *every one*. Calling this again
    would attach a *second* listener to every button, meaning each
    click would be processed twice.
   */
  $('.td__toggle_complete_button').click(_.debounce(processLike,
      MILLS_TO_IGNORE_LIKES, true));
  /*
    Warning: Placing the true parameter outside of the debounce call:
 
    $('#color_search_text').keyup(_.debounce(processSearch,
        MILLS_TO_IGNORE_SEARCH), true);
 
    results in "TypeError: e.handler.apply is not a function".
   */