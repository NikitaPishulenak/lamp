$(document).ready(function(){
	let cDate=new Date();
	var options = {
	  month: 'long',
	  day: 'numeric',
	  timezone: 'UTC',
	};

	$("#cDate").text(cDate.toLocaleString("ru", options));
});

jQuery(document).ready(function() {jQuery("#phonNumber").mask("+375 (99) 999-99-99");});
// $(function(){
// 	$('#phonNumber').mask("9.9.99");
// });
