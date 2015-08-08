$(function(){
	$("#remove-instructions").click(function(){
		$(".list-of-instructions").hide();	
		$("#add-instructions-again").show();	
	});
	
	$("#add-instructions-again").click(function(){
		$("#new-item-of-instructions").show();
	});
	
});