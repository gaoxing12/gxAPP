mui.init({
				swipeBack: true //启用右滑关闭功能
			});

			(function(e) {
				//主图滚动
				var slider = mui("#slider");
				document.getElementById("switch");
				slider.slider({
					interval: 1000
				});
			})()

			//公告
			if(document.getElementById("jsfoot01")){
				var scrollup = new ScrollText("jsfoot01");
				scrollup.LineHeight = 44; //单排文字滚动的高度
				scrollup.Amount = 1; //注意:子模块(LineHeight)一定要能整除Amount.
				scrollup.Delay = 20; //延时
				scrollup.Start(); //文字自动滚动
				scrollup.Direction = "up"; //文字向下滚动
			}
			
//轮播
var swiper = new Swiper('.swiper-containers', {
      slidesPerView: 5,
      slidesPerColumn: 2,
      //slidesPerColumn: 多行布局里面每列的slide数量。
			//slidesPerColumn目前还不兼容loop模式（loop: true）。
      spaceBetween: 5,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
//第二个轮播
//轮播
var swiper = new Swiper('.swiper-container2', {
      slidesPerView: 3,
      slidesPerColumn: 1,
      //slidesPerColumn: 多行布局里面每列的slide数量。
			//slidesPerColumn目前还不兼容loop模式（loop: true）。
      spaceBetween: 10,
//    loop:true,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
    });