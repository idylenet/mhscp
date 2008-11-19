// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function()
{
	$('.menu').superfish({
								delay:       1000,                            // one second delay on mouseout 
		            animation:   {opacity:'show'},  // fade-in and slide-down animation 
		            speed:       'fast',                          // faster animation speed 
		            autoArrows:  true,                           // disable generation of arrow mark-up 
		            dropShadows: false,                            // disable drop shadows
								pathClass:  'current' 
		})
		
	$('.remote-form').click(function(){launchFormInBlockUI($(this).attr('href')); return false})
	$('#messages .close').click(function(){ $(this).parent().fadeOut(1000) })
	$('table').tablesorter()
	
})

function launchFormInBlockUI(formLink)
{
	
	// get our form
	var result = $.get(formLink, function(data){
		var close = $('<a href="#" class="close">Close</a>').click(function(){ $.unblockUI() })
		var block = $('<div class="block-window"></div>').append(close).append(data)
		$.blockUI({message: block})
	})

	
}

var Utils = function(){
	
}

Utils.parseJson = function(data){
	return eval('('+data+')')
}

