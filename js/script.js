$(function() {
    // 풀페이지
    var page = $('.fullpage').fullpage({
        scrollingSpeed: 500,
        //aos        
        afterLoad: function(anchorLink, index){
            jQuery('.section.active [data-aos]').addClass("aos-animate");
            if (index == 3){
				$('.topBtn').addClass('black');
			} else if (index == 4){
				$('.topBtn').addClass('black');
            } else if (index == 5){
				$('.topBtn').addClass('black');
            } else if (index == 6){
				$('.topBtn').addClass('black');
            } else if (index == 7){
				$('.topBtn').addClass('black');
            } else if (index == 8){
				$('.topBtn').addClass('black');
            } else if (index == 1){
				$('.topBtn').addClass('hide');
            } else {
                $('.topBtn').removeClass('black');
                $('.topBtn').removeClass('hide');
            }
        },
        onLeave: function(){
            jQuery('.section [data-aos]').removeClass("aos-animate");
        },
        onSlideLeave: function(){
            jQuery('.slide [data-aos]').removeClass("aos-animate");
        },
        afterSlideLoad: function(){
            jQuery('.slide.active [data-aos]').addClass("aos-animate");
        },     
        
        anchors: ['sec01','sec02','sec03', 'sec04', 'sec05','sec06','sec07','sec08', 'sec09', 'sec10'],
    });

    // aos 초기화
	AOS.init({
		once: true,
	});

    // 슬라이드
	var swiperArticle = new Swiper('.art-slideWrap', {
		spaceBetween : 40,
		slidesPerView : 2.95,
		loop : true,
		loopedSlides: 10,
		loopAdditionalSlides: 10,
		centeredSlides :false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true, 
        },

		 breakpoints: {
            1350: {
                spaceBetween : 20,
                slidesPerView : 1.8,
                centeredSlides :false,
                },

			760: {
			spaceBetween : 20,
			slidesPerView : 1.4,
            centeredSlides :true,
			}
		},
	});

    // sec08 tab 반응형
    var swiperTab = new Swiper('.scroll', {
		slidesPerView : 5,
        autoplay : false,
        breakpoints: {
			445: {
                slidesPerView : 3.5,
			}
		},
	});

    // sec08 tab 작동
    $('.yearTab li').on('click',function(){
		var tabNum = $(this).data('yearTab');
		$('.yearTab li').removeClass('on');
		$(this).addClass('on');
		$('#' + tabNum).css('height','auto');
	});

	$(".yearTab li").click(function(){
		var tabNum = $(this).data('year');
		$(".yearTab li").removeClass('on');
		$(this).addClass('on');
		$('.listWrap').removeClass('on');
		$('#' + tabNum).addClass('on');
	});
	$('.yearTab li:nth-child(1)').trigger('click');

    $('.mapBtn').click(function(){
        $(this).toggleClass('active');
    });

})