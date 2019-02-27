$(document).ready(function(){

	var mobnav = $(".mobnav"),
		mobnavB = $(".mobnav-button");

	$(mobnavB).click(function(){
		$(mobnav).toggle(500);
	});

});