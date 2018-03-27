$(document).ready(function(e) {
    $(window).on("scroll",function(){
		var scroll = $(window).scrollTop();
		console.log(scroll);
		if(scroll>30){
			$("nav").stop().animate({"background-color":"#fff"},300);	
		}else if(scroll<30){
			$("nav").stop().animate({"background-color":"transparent"},300);
		}
	});
});

$(document).ready(function(e) {
    var slideIndex = 1;
	//변수 slideIndex에 초기 값으로 1을 저장
	showSlides(slideIndex); //해당 이미지 맞게 숫자가 보여지게 함
	//showSlides함수에 인자 값으로 slideIndex에 저장된 값을 지정하여 보내준다.
	
	$(".prev").on("click",function(){//.prev버튼을 클릭했을 때
		showSlides(slideIndex -= 1);	
		//showSlides함수에 인자값으로 slideIndex에 1을 뺀 값을 다시 slideIndex에 담아서 보내준다
	});//$는 선택자
	$(".next").on("click",function(){//.next버튼을 클릭했을 때
		showSlides(slideIndex += 1);
		//showSlides함수에 인자값으로 slideIndex에 1을 더한 값을 다시 slideIndex에 담아서 보내준다
	});
	
	$(".dot").on("click",function(){//인디게이터를 클릭했을 때
		var i = $(this).index()+1;	
		//클릭한 .dot객체에 index번호를 +1하여 변수i에 저장
		showSlides(slideIndex = i);
		//showSlides함수에 인자값으로 slideIndex에 i를 담아서 보내준다
	});
	
	function showSlides(n){//n은 매개변수
		var slides = $(".mySlides");
		//변수 slides에 .mySlides객체 지정
		var dots = $(".dot");
		//변수 dots에 .dot객체를 지정
		if(n>slides.length){slideIndex = 1};//슬라이드.렝쓰는 숫자3을 의미?
		//n(인자)값이 slides객체의 숫자보다 크면 slideIndex에 1을 담아서 첫 번째 이미지가 선택되게 함
		if(n<1){slideIndex = slides.length};
		//n(인자)값이 1보다 작으면 slideIndex에 slides객체의 숫자를 담아준다
		slides.css({"display":"none"});
		//slide객체의 css속성인 display를 none으로 화면에서 가려준다
		dots.removeClass("active");
		//dots에 클랙스 active를 제거해준다
		
		slides.eq(slideIndex-1).css({"display":"block"});
		//Index번호는 0번부터 시작하기에 -1을 해줘야 함
		//slides의 인덱스 번호가 slideIndex에서 1을 뺀 순번을 호출, css속성인 display값을 block으로
		//화면에 보여지게 만듬
		dots.eq(slideIndex-1).addClass("active");
		//dots의 인덱스 번호가 slideIndex에서 1을 뺀 순번을 호출 active클래스를 호출하여 배경색을
		//변경시킴
	};
});