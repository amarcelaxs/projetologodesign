$(document).ready(function() {
	$( ".help" ).mouseover(function() {
		$(".box").show();
		
	})
	.mouseout(function(){
	  $(".box").hide();		
	});
	
	
	$( ".indice .button" ).on('click',function() {
		$(".button").css("right","229px");
		$(".box-indice").css("display","block");
	})	
	$( ".indice .button" ).delegate(  ".indice .button","click", function() {
		$(".button").css("right","0");
		$(".box-indice").hide();
		
	});
	

	
		
});

