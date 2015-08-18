$(function(){//ensures that jquery is loaded
	var $slider = $('#content-to-swipe');
	
	$slider.slick({
		initialSlide:1,
		swipe:true,
		swipeToSlide:true,
        speed:300,
		slidesToShow:1,
		infinite:false
      });
	
	$("#week0").on('click',function(){
		$slider.slick('slickGoTo',0);
	});
	
	$("#week1").on('click',function(){
		$slider.slick('slickGoTo',1);
	});
	
	$("#week2").on('click',function(){
		$slider.slick('slickGoTo',2);
	});
	
	$slider.on('afterChange',function(slick,currentSlide){//use afterChange so that you won't have to repeat the code below in the click functions above
		$(".weeks").removeClass('selected');
		$("#week" + currentSlide.currentSlide).addClass('selected');
	});
	
	$("#kim-jensen").on("click",function(){
		window.location.href="existentScheduleEntry.html";
	});
	$("#ole-andersen").on("click",function(){
		window.location.href="scheduleEntryHelpers.html";
	});
	
	var session = JSON.parse(sessionStorage.getItem("loginSession"));
	if (!session) return;
	
	if(session.userType==="CITIZEN"){
		$("#add-new-entry").show();
	}else{
		//do nothing with that button
	}
	
});