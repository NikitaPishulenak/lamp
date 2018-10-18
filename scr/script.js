$(document).ready(function(){
	let cDate=new Date();
	var options = {
	  month: 'long',
	  day: 'numeric',
	  timezone: 'UTC',
	};

	$(".cDate").text(cDate.toLocaleString("ru", options));

	$("a[rel=img_group]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	$(document).scroll(function() {
	  $('.hidden').each(function() {
	  	if($(this).css("opacity")!=1){
	  		if (($(this).position().top+$(this).parent().parent().parent().position().top-$(document).scrollTop())<850) {
		      $(this).animate({
		        opacity: 1
		      }, 2000);
		      $(this).parent().animate({
		        marginTop: '50px'
		      }, 2000);
		    }
	  	}
	  });
	});
});
