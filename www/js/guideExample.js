$(function(){
	$("#edit-instructions-content").on("click",function(){	
	console.log('yo');
		$("#instructions-content").attr("contentEditable", true);
	});
});