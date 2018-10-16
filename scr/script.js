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
	  $('.hidden').each(function(e) {
	  	console.log(e.pageY);
	    if ((Number(e.pageY)-Number($(this).parent().parent().position().top)-Number($(this).position().top))<=0) {
	    	//console.log('1');
	      $(this).animate({
	        opacity: 1
	      }, 2000);
	    }
	  });
	});
});
