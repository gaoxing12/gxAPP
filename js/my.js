
	$(document).scroll(function(){
		var gHidtop = $(this).scrollTop();
		if(gHidtop>=100){
			$(".mui-title").html("我的");
			$(".myHeaderIcon").children("span").css({"color":"#000"});
			$(".myHeader").css({"box-shadow":"0 1px 6px #ccc"});
		}
		else{
			$(".mui-title").html("");
			$(".myHeaderIcon").children("span").css({"color":"#fff"});
			$(".myHeader").css({"box-shadow":"none"});
//			$(".saoyisao").children("span").css({"color":"#fff"});
		}
//		console.log(gHidtop);
	});