$(document).ready(function(){
	let cDate=new Date();
	var options = {
	  month: 'long',
	  day: 'numeric',
	  timezone: 'UTC',
	};

	$("#cDate").text(cDate.toLocaleString("ru", options));
});
