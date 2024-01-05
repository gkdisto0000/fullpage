$(function() {
    // 풀페이지
    $('.fullpage').fullpage({
        normalScrollElements: '.scroll-active',
        //aos        
        afterLoad: function(anchorLink, index){
            jQuery('.section.active [data-aos]').addClass("aos-animate");

            if (index == 1){
				$('.topBtn').addClass('hide');
                $('.gnbWrap').removeClass('black');
            } else if (index == 2){
				$('.topBtn').removeClass('hide');
                $('.topBtn').removeClass('black');
                $('.gnbWrap').removeClass('black');
            } else if (index == 3){
				$('.topBtn').addClass('black');
                $('.gnbWrap').addClass('black');
			} else if (index == 4){
				$('.topBtn').addClass('black');
                $('.gnbWrap').addClass('black');

                //목업 슬라이드
                var mockUpSlide = new Swiper('.mockUp-slide', {
                    slidesPerView : 1,
                    autoplay : true,
                    speed : 600,
                    loop : true,
                });
            } else if (index == 5){
				$('.topBtn').addClass('black');
                $('.gnbWrap').addClass('black');

                //목업 슬라이드
                var mockUpSlide = new Swiper('.mockUp-slide2', {
                    slidesPerView : 1,
                    autoplay : true,
                    speed : 600,
                    loop : true,
                });
            
            } else if (index == 6){
				$('.topBtn').addClass('black');
                $('.gnbWrap').addClass('black');
            } else if (index == 7){
				$('.topBtn').addClass('black');
                $('.gnbWrap').addClass('black');
            } else if (index == 8){
				$('.topBtn').addClass('black');
                $('.gnbWrap').addClass('black');
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
		duration: 300,
		easing: 'ease',
	});


    // 작가 슬라이드
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
	$(".yearTab li").click(function(){
		var tabNum = $(this).data('year');
		$(".yearTab li").removeClass('on');
		$(this).addClass('on');
		$('.listWrap').removeClass('on');
		$('#' + tabNum).addClass('on');

        var list = $('.listWrap.on .scroll-all');
        var listNum = list.children().length;
    
        // 더보기 버튼 -> list 4개 이상일때 노출
        if(listNum > 4) {
            $('.listMore').removeClass('hide');
            list.parent('.listWrap').addClass('scroll-active');
        } else {
            $('.listMore').addClass('hide');
            list.parent('.listWrap').removeClass('scroll-active');
        }

        $(".listWrap.on .scroll-all").scroll(function(){    
            var scrollTop = $(this).scrollTop();
            var innerHeight = $(this).innerHeight();
            var scrollHeight = $(this).prop('scrollHeight');
            if (scrollTop + innerHeight >= scrollHeight) {
                location.href = "#sec09"
            } else if (scrollTop == 0) {
                location.href = "#sec07"
            }
            console.log(scrollTop);
        });



	});
	$('.yearTab li:nth-child(1)').trigger('click');
    


    $('.listMore').click(function(){
        //더보기 클릭하면 스크롤 맨 하단으로 이동!!
    });

    
    //mo 햄버거 바
    $('.mapBtn').click(function(){
        $(this).toggleClass('active');
    });



}) 
// end