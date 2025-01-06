
/*========================================================
header
========================================================*/
$(function(){
	//menu click
	$('#header .btn_menu').click(function(){
		if($('#header').hasClass('on')){
			$('body').removeClass('modal-open');
			$('#header').removeClass('on');
			$('#header .btn_menu').removeClass('on');
			
			setTimeout(function(){
				$('.header_nav_wrap').css('display','none');
			},200);
		}else{
			
			$('body').addClass('modal-open');
			$('#header').addClass('on');
			$('#header .btn_menu').addClass('on');

			setTimeout(function(){
				$('.header_nav_wrap').css('display','flex');
			},200);
		}
	});
	//header menu(2depth)
	$('#header .header_nav li').click(function(){
		$('.header_nav > li').removeClass('on');
         $('.depth02').slideUp();
         if ($(this).children('.depth02').is(':hidden')){
            $(this).children('.depth02').slideDown();
			$(this).addClass('on');
         } else{
            $(this).children('.depth02').slideUp();

         }
    });
	//gnb 메뉴
	$('#header .gnb_wrap > ul > li').hover(function(){
		//$('#header').toggleClass('drop');
		$(this).toggleClass('on');
		$(this).children('.gnb_depth2').stop().slideToggle();
	});
	//tab
	$('.tab ul li a').on('click',function(){
		var targer = $(this).closest('li')
		var idx = targer.index();

		targer.addClass('active').siblings().removeClass('active');
		$('.tab_cont > ul> li').eq(idx).addClass('active').siblings().removeClass('active');
	});
	//파일업로드
	$('.filebox').on('change',function(){
		var val = $(this).val()
		var file = val.split('\\');
		var num = file.length-1; 
		var fileName = file[num];
		$(this).parents('.fileupload_box').find('.upload_name').val(fileName);
	});
});


/*========================================================
footer
========================================================*/




/*========================================================
popup
========================================================*/



/*========================================================
//기기 확인 PC & MOBILE
========================================================*/
function isMobile(){
	var UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)

	{
		return true;
	}else{
		return false;
	}
}



/*====================================================================================
pc - onepage mousewheel event 
====================================================================================*/
function PcScroll(){
		/*==========================================
		마우스 휠 이동
		==========================================*/
		var $nav = null,
			$cnt = null,
			moveCnt = null,
			moveIndex = 0,
			moveCntTop = 0,
			winH = 0,
			time = false; // 새로 만든 변수

		$(document).ready(function(){
			init();
			initEvent();
		});
	
		var init = function(){
			$cnt = $("#fullpage");
			$cntLength = $cnt.find('.section').length; // section 개수
			//$nav = $("#fp-nav ul li a");
			//$topbtn = $('.top_btn');
		};
	
		var initEvent = function(){
			$("html ,body").scrollTop(0);
			winResize();
			$(window).resize(function(){
				winResize();
			});

			//$nav.on("click", function(){
			//	moveIndex = $(this).parent("li").index();
			//	moving(moveIndex);
			//	return false;
			//});
			//$topbtn.on("click", function(){
			//	moveIndex = 0;
			//	moving(moveIndex);
			//	return false;
			//});
			
			$cnt.on("mousewheel", function(e){
				if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
				  wheel(e);
				}
			});
		};
		
		var winResize = function(){
			winH = $(window).height();
			$cnt.children("div").height(winH);
			$("html ,body").scrollTop(moveIndex.scrollTop);
		};
		
		var wheel = function(e){
			$("body").addClass('scroll_none');//버벅임 제거
			//console.log(moveIndex);
			if(e.originalEvent.wheelDelta < 0){
				if(moveIndex < $cntLength - 1){
					moveIndex += 1;
					moving(moveIndex);
				};
			}else{
				if(moveIndex > 0){
					moveIndex -= 1;
					moving(moveIndex);
				};
			};
			
		};
	
		var moving = function(index){

			time = true // 휠 이벤트가 실행 동시에 true로 변경
			moveCnt = $cnt.children(".section").eq(index);
			moveCntTop = moveCnt.offset().top;

			setTimeout(function() {
				$("html ,body").stop().animate({
					scrollTop: moveCntTop,
				}, 800, function(){
				  time = false; // 휠 이벤트가 끝나면 false로 변경
				  $("body").removeClass('scroll_none'); //버벅임 제거
				   return false;
				});
				//$nav.parent("li").eq(index).addClass("active").siblings().removeClass("active");
			},100);
		};
		
};

/*====================================================================================
mobile - onepage touch event
====================================================================================*/
function MoTouch(){
		//모바일 브라우저 바 이슈 수정
		//화면 리사이즈시 변경 
		window.addEventListener('resize', () => {init();}); 
		window.addEventListener('touchend', () => { init();});
	
		
		$(document).ready(function(){
			init();	
		});
							
		var init = function(){
			$winH = $(window).height();
			$(".section").height($winH); // 높이 100vh
			$(".section .main_banner .slick-slide").height($winH);
		};

	
		var wheelSts=1;
		var ts;
		var SectionCk;
		

		$('.section').bind('touchstart', function (e){
			 ts = e.originalEvent.touches[0].clientY;
			 isDrag = true;
			 //가로 슬라이드
			 var touch = event.touches[0];
			touchstartX = touch.clientX;
			touchstartY = touch.clientY;
			init();
		});

		//touchend
		$('.section').bind('touchmove', function (e ,SectionCk){});
		$('.section').bind('touchend touchcancel', function (e){
			var te = e.originalEvent.changedTouches[0].clientY;							
			var moveTop;

			//가로 슬라이드
			var touch = event.changedTouches[event.changedTouches.length - 1];
			touchendX = touch.clientX;
			touchendY = touch.clientY;

			touchoffsetX = touchendX - touchstartX;
			touchoffsetY = touchendY - touchstartY; 
			var xSize =  Math.abs(touchoffsetX);
			var ySize =  Math.abs(touchoffsetY);


			 if(xSize > ySize){
				console.log('세로');
			 }else{
				if(ySize > 100){
					 //console.log('가로');
					 $(".section").each(function (index) {
							$("body").removeClass('scroll_none'); //버벅임 제거
							if (ts > te + 5 ) {
								moveTop = $('.sec_on').next().offset().top;
							} else if(ts < te - 5) {
								moveTop = $('.sec_on').prev().offset().top;
							}
							// 화면 이동 0.8초(800)
							if(wheelSts==1){
								wheelSts=0;
								//setTimeout(function() {
									$("html,body").stop().animate({
										scrollTop: moveTop + 'px'
									}, {
										duration: 600, complete: function () {
											wheelSts=1;
										}
									});
								//},10);
							}
					 });
				 }
				 $("body").addClass('scroll_none'); //버벅임 제거
			 }
			e.stopPropagation();
			
			 
		});


}