$(document).ready(function(){
	let cDate=new Date();
	var options = {
	  month: 'long',
	  day: 'numeric',
	  timezone: 'UTC',
	};

	$("#cDate").text(cDate.toLocaleString("ru", options));
	$("a.s_b_photo").fancybox();
	// $("div").click(function(e){
	// 	console.log($(this).parent().parent().position().top);
	// });
	$(document).scroll(function() {
	  $('.hidden').each(function() {
	  	if($(this).css("opacity")!=1){
	  		if (($(this).position().top+$(this).parent().parent().parent().position().top-$(document).scrollTop())<700) {
		      $(this).animate({
		        opacity: 1
		      }, 2000);
		    }
	  	}
	  });
	});
});
