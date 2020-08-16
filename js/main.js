$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loading" ).slideUp(1000, function() {
      // fadeOut complete. Remove the loading div
      /*$( "#loadingDiv" ).remove(); //makes page more lightweight */
  });  
}
$(document).ready(function(){
	$("div.payload_continer>button.exploit-button").click(function(){
		$(this).siblings().not(".right-panel").show("slide", { direction: "left" }, 500);
		$(this).siblings().not(".left-panel").show("slide", { direction: "right" }, 500);
	});
	$(".payload_close").click(function(){
		$(this).closest('.left-panel').hide("slide", { direction: "left" }, 1200);
		$(this).parents(':eq(1)').siblings().not(".left-panel").not(".exploit-button").hide("slide", { direction: "right" }, 1200);
	});
	
});