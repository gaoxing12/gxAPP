	var informTitleA = document.getElementsByClassName("inform_title_a");
	informTitleA[0].onclick=function(){
//		console.log(this);
//		console.log(informTitleA[1]);
		informTitleA[0].className="inform_title_a informH_active";
		informTitleA[1].className="inform_title_a";
	}
	informTitleA[1].onclick=function(){
//		console.log(this);
//		console.log(informTitleA[1]);
		informTitleA[1].className="inform_title_a informH_active";
		informTitleA[0].className="inform_title_a";
	}
