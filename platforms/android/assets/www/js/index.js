/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
 
/*if (cordova.platformId == 'android') {
    StatusBar.backgroundColorByHexString("#1976D2");
}*/
 
$(function(){//this makes sure that jquery is loaded before it does anything
	$("#submit").on('click',function(){
		var usernameInput = $("#username").val();//takes the user input
		//console.log(usernameInput);
		var userPassword = $("#password").val();
		//console.log(userPassword);
		
		var userCredentials = {//create a javascript object
			userName: usernameInput, //write the parameters exactly like in the documentation; fx userName for the username
			password: userPassword
		};
		
		var successCallback = function(loginSession){
			console.log(loginSession.userType);
			var isLoginSuccessful = loginSession.userType!=="NO_ACCESS";
			console.log(isLoginSuccessful);
			if(true){
			
			}else{
				
			}
		}; 
		
		var settings = {//define the settings necessary for the ajax request
		  url: "http://rohdef.dk:8080/hfserver/rest/auth/login",
		  method: "POST",
		  dataType: "json", 
		  contentType: "application/json; charset=utf-8",
		  data: JSON.stringify(userCredentials),
		  success: successCallback,
		}
		$.ajax(settings);//you call ajax with settings as a parameter; to do a login request
		
		
	});
});

 

var app = {
	// Application Constructor
	initialize: function() {
	  this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
	  document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
	  app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
	  console.log('Received Event: ' + id);
	}
};

app.initialize();