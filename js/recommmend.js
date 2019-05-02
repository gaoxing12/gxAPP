$(function(){
	$(".mui-control-item").click(function(){
		console.log($(this).attr("class"));
		if($(this).attr("class","mui-control-item mui-active")){
			$(this).children("span").css({"border-bottom":"2px solid #4ec060"});
			$(this).siblings("a").children("span").css({"border-bottom":"none"})
		}
	})
})