$(function(){
	
	var session = JSON.parse(sessionStorage.getItem("loginSession"));
	if (!session) return;
	
	if(session.userType==="CITIZEN"){
		$("#add-new-entry").show();
	}else{
		//do nothing with that button
	}
	
	var userDetailsCallback = function(user){
			document.getElementById("myname").innerHTML = user.firstName + " " + user.lastName;
			document.getElementById("myemail").innerHTML = user.email;
		}
		
	var userInfo = {
			url:"http://rohdef.dk:8080/hfserver/rest/auth/details",
			method: "GET",
			dataType: "json", 
			contentType: "application/json; charset=utf-8",
			success: userDetailsCallback,
			headers:	{
			Authorization: "Basic " + btoa(session.userName + ":" + session.token)
		}
	}
	$.ajax(userInfo);
});

