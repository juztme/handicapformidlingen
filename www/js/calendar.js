$(function(){//ensures that jquery is loaded
	var session = JSON.parse(sessionStorage.getItem("loginSession"));
	console.log(session);
	if(session.userType==="CITIZEN"){
		$("#add-new-entry").show();
	}else{
		//do nothing with that button
	}
});