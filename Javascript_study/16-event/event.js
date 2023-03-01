//tab 관련 함수

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



//까만 배경 눌렀을 때 modal창 닫는 기능 만들기!
document.querySelector('.black-bg').addEventListener('click',function(e){
    //e.target;  유저가 실제로 누른거 = 이벤트 발생한 곳.
    //e.currentTarget;  이벤트 리스너 달린 곳 = this.
    //e.preventDefault;  이벤트 기본 동작 막아줌 = ex)폼 전송을 막아준다.
    //e.stopPropagation;  상위요소html로 퍼지는 이벤트를 막아준다.

    //만약 내가 클릭한게 == 뒤에 나오는 요소와 같으면 해당 이벤트를 실행해라.
    if(e.target == document.querySelector('.black-bg')){
        document.querySelector('.black-bg').style.display='none';
    }
})

//이벤트 버블링 = 이벤트가 상위 html로 퍼지는 현상
