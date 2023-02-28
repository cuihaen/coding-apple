for(let i = 0; i < document.querySelectorAll('.tab-button').length; i++){
    document.querySelectorAll('.tab-button')[i].addEventListener('click',function(){
        for(let j = 0; j < document.querySelectorAll('.tab-button').length; j++){
            document.querySelectorAll('.tab-button')[j].classList.remove('orange');
        }
        document.querySelectorAll('.tab-button')[i].classList.add('orange');

        for(let j = 0; j < document.querySelectorAll('.tab-button').length; j++){
            document.querySelectorAll('.tab-content')[j].classList.remove('show');
        }
        document.querySelectorAll('.tab-content')[i].classList.add('show');
    })
}

//자주 쓰는 셀렉터 '변수'에 넣어서 사용하는 것을 권장!
//for 반복문으로 만드는 것이 훨씬 편리!