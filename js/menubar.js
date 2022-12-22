// depth2 하단에 나타내기
window.onload = function() {
    let gnb = document.querySelectorAll('#gnb>.btn');
    let gnbElement = document.querySelector('#gnb');

    for(i=0; i<gnb.length; i++){
        gnb[i].addEventListener('mouseover', function(){
            gnbElement.classList.add('on');
            // gnb요소를 불러와.클래스야.추가하자('on이라는 이름을 가진')
            // gnb 안에 'on'이라는 클래스를 추가할꺼야!
        });
    }

    let headerElement = document.querySelector('header');
    headerElement.addEventListener('mouseout', function(e){
        // 매개변수 e를 설정!! event의 약자인 e를 일반적으로 많이 사용함
        if(e.target.id == 'gnb'){
            gnbElement.classList.remove('on');
            // gnb 안에 'on'이라는 클래스를 제거할꺼야!
        };
    });
};


// 트리거(햄버거메뉴)
$(function(){
    let trigger = $('#trigger');
    let menu = $('#gnb');

    $('#trigger').on('mouseover',function(e){
        e.preventDefault();    // 초기화
        menu.slideToggle();
    });

    $(window).resize(function(){
        let w = $(window).width(); // 디바이스의 너비값을 변수 w에 대입(할당)

        if(w<721 && menu.is(':hidden')){  // 너비가 721미만이고 메뉴가 숨겨진 것이 있다면 아래와 같이 처리
            menu.removeAttr('style');  // 스타일값을 제거
        }
    });

});


  // 아코디언 효과

  $(function(){
    $('.btn a').on('mouseover', function(){

        $('.btn').next('.depth2').filter(':visible').slideUp();

        $(this).parent().next().slideDown();

        return false;
    });
});

