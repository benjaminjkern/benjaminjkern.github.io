$(document).ready(function(){

  	$("a").on('click', function(event) {
  		let ref = jQuery(this).attr("class");


		if (this.getAttribute("href").charAt(0) === "#" && ref !== "nav-link") {
	        event.preventDefault();
	  		var hash = this.hash;
	  		$('html, body').animate({
				scrollTop: $(hash).offset().top
	  		}, 800, function(){
				window.location.hash = hash;
	  		});
	    }

	    
  		
  	});
});