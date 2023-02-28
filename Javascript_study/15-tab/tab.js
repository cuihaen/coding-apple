for(let i = 0; i < document.querySelectorAll('.tab-button').length; i++){
    document.querySelectorAll('.tab-button')[i].addEventListener('click',function(){
        document.querySelectorAll('.tab-button')[0].classList.remove('orange');
        document.querySelectorAll('.tab-button')[1].classList.remove('orange');
        document.querySelectorAll('.tab-button')[2].classList.remove('orange');
        document.querySelectorAll('.tab-button')[i].classList.add('orange');

        document.querySelectorAll('.tab-content')[0].classList.remove('show');
        document.querySelectorAll('.tab-content')[1].classList.remove('show');
        document.querySelectorAll('.tab-content')[2].classList.remove('show');
        document.querySelectorAll('.tab-content')[i].classList.add('show');
    })
}

//자주 쓰는 셀렉터 '변수'에 넣어서 사용하는 것을 권장!
//for 반복문으로 만드는 것이 훨씬 편리!