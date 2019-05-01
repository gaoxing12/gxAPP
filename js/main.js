var swiper = new Swiper('.swiper-container', {
      // slidesPerView: 1,
      // slidesPerColumn: 2,
      //slidesPerColumn: 多行布局里面每列的slide数量。
			//slidesPerColumn目前还不兼容loop模式（loop: true）。
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });