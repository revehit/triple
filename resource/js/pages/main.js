//header scrolltop
$(function(){
	var header = document.querySelector("#header");
	var headerHeight = header.offsetHeight;

	window.onscroll = function () {
	  var windowTop = window.scrollY;
		// 스크롤 세로값이 헤더높이보다 크거나 같으면 
		// 헤더에 클래스 'drop'을 추가한다
	  if (windowTop >= headerHeight) {
		header.classList.add('drop');
		header.classList.add('onn');
		
	  } 
	  // 아니면 클래스 'drop'을 제거
	  else {
		header.classList.remove('drop');
		header.classList.remove('onn');
		$('body').removeClass('modal-open');
	  }
	};

	//gnb 메뉴
	$('#header .gnb_wrap > ul > li').hover(function(){
		$('#header').toggleClass('drop');
		
	});
});


//mainvisual
	$(function(){
		var MainVisual =$('.main_banner');
		MainVisual.slick({
			slide:'li',
			autoplay:true,
			infinite:true,
			autoplaySpeed:8000,
			speed:1000,
			pauseOnHover:false,
			accessibility:true, //접근성
			prevArrow: $('.main_banner_wrap .prev'), 
			nextArrow: $('.main_banner_wrap .next'),
			dots:true, 
			draggable : true,//드래그 가능 여부 
		});

		$('.main_banner').on('afterChange', function(){
			var idx = $('.main_banner .slick-dots .slick-active').index();
			var now = idx + 1
			if(now < 3){
				$('.main_banner_wrap').find('.pro-num .now').text('0'+now);
			}else{
				$('.main_banner_wrap').find('.pro-num .now').text('0'+now);
			}
			var grpW = now*50;
			$('.slide').removeClass('on');
			$('.slick-active').addClass('on');
			$('.pro-bar em').width(grpW)
			

		});
	});
		
//section02
	$(function(){	//pc
		var Beseproduct_pc =$('.section02 .product_list.pc_show');
		Beseproduct_pc.slick({
			slide:'li',
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay:false,
			infinite:true,
			autoplaySpeed:8000,
			speed:600,
			pauseOnHover:false,
			accessibility:true, //접근성
			prevArrow: $('.section02_slide_arrow.prev.pc_show'), 
			nextArrow: $('.section02_slide_arrow.next.pc_show'),
			dots:false, 
			draggable : false,//드래그 가능 여부 
		});
	});
	$(function(){ //tabmo
		var Beseproduct =$('.section02 .product_list.tabmo_show');
		Beseproduct.slick({
			centerMode: true,
			centerPadding:'20vw',
			autoplay: false,
			infinite: true,
			arrows: false,
			slidesToShow: 1,
			dots : true,
			dotsClass:'se02_dots',
			appendDots: $('.se02_dots_outer'),
			responsive: [ 
				{ 
					breakpoint: 720, 
					settings: {	
						slidesToShow: 1,
						variableWidth:true,
					} 
				}
			]
		});
		var Beseproduct_hov=$('.section02 .product_list.pc_show li');
		$(Beseproduct_hov).on('mouseleave',function(){
			$(Beseproduct_hov).removeClass('hov');
		});
		$(Beseproduct_hov).on('mouseover',function(){
			$(Beseproduct_hov).removeClass('hov');
			$(this).addClass('hov');
		});
	});


//subvisual
	$(function(){
		var SubVisual =$('.subbanner_slider');
		SubVisual.slick({
			slide:'li',
			autoplay:true,
			infinite:true,
			autoplaySpeed:8000,
			speed:1000,
			pauseOnHover:false,
			accessibility:true, //접근성
			prevArrow: $('.subbanner .prev'), 
			nextArrow: $('.subbanner .next'),
			dots:true, 
			draggable : true,//드래그 가능 여부 
		});

		$('.subbanner_slider').on('afterChange', function(){
			var idx_sub = $('.subbanner_slider .slick-dots .slick-active').index();
			var now_sub = idx_sub + 1
			if(now_sub < 2){
				$('.subbanner .pro-num .now').text(+now_sub);

			}else{
				$('.subbanner .pro-num .now').text(+now_sub);
			}
		});
	});



	
//addsection
$(function(){	
	var addsection01=$('.addsection01 ul > li');
	if ($(window).width() > 1024) { // 1024보다 클 때 동작
		$(addsection01).hover(function(){
			$(this).toggleClass('on');
		});
	}
});


	
//section05
	$(function(){
		var Section05_hov=$('.sec05_sl_outer.pc_show li');
		if ($(window).width() > 1024) { // 1024보다 클 때 동작
			$(Section05_hov).hover(function(){
				$(this).toggleClass('bg');
			});
		}
	});
	$(function(){	//pc
		var Section05 =$('.section05 .slide .sec05_sl_outer.pc_show');
		Section05.slick({
			slide:'li',
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay:false,
			infinite:true,
			autoplaySpeed:8000,
			speed:600,
			pauseOnHover:false,
			accessibility:true, //접근성
			prevArrow: $('.section05_slide_arrow.prev.pc_show'), 
			nextArrow: $('.section05_slide_arrow.next.pc_show'),
			dots:false, 
			draggable : false,//드래그 가능 여부 
		});
	});

	$(function(){	//tabmo
		var Section05_tab =$('.section05 .slide .sec05_sl_outer.tabmo_show');
		Section05_tab.slick({
			centerMode: true,
			centerPadding:'100px',
			variableWidth:true,
			autoplay: false,
			infinite: true,
			arrows: true,
			slidesToShow: 1,
			prevArrow: $('.section05_slide_arrow.prev.tabmo_show'), 
			nextArrow: $('.section05_slide_arrow.next.tabmo_show'),
			dots : false
		});
	});

	
	
	




	



