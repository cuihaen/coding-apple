 // 첫번째 carousel
 const carouselItems = document.querySelector('.carouselItems1');
 const carouselItem = document.querySelectorAll('.carouselItems1 li');

 const carouselItemCount = carouselItem.length;
 let currentIndex = 0;
 let carouselWidth = carouselItem[0].clientWidth;
 console.log(carouselWidth);
 const carouselMargin = 4;
 const rightBtn = document.querySelector('.conBtn1.right');
 const leftBtn = document.querySelector('.conBtn1.left');
 
 cloneItems();
   
 function cloneItems(){
   for(let i = 0; i < carouselItemCount; i++){
     //cloneNode활용해서 필요한 요소들을 복사!
     let cloneItem = carouselItem[i].cloneNode(true);
     cloneItem.classList.add('clone');
     //a.appendChild(b) 기존 요소 뒤에다가 추가!
     carouselItems.appendChild(cloneItem);
   }
   for(let i = carouselItemCount - 1; i >= 0; i--){
     let cloneItem = carouselItem[i].cloneNode(true);
     cloneItem.classList.add('clone');
     //a.prepend(b) 기존 요소 앞에다가 추가!
     carouselItems.prepend(cloneItem);
   }
   updateWidth();
   setInitialPosition();
 
   //앞뒤 요소 추가된 후 클래스 추가!
   setTimeout(function(){
     carouselItems.classList.add('animated');
   },100);
 }
   
 function updateWidth(){
   let currentCarouselItem = document.querySelectorAll('.carouselItems1 li');
   let carouselItemCount = currentCarouselItem.length;
 
   let newWidth = (carouselWidth + carouselMargin) * carouselItemCount - carouselMargin + 'px';
   carouselItems.style.width = newWidth;
 }
 
 //초기위치설정!
 function setInitialPosition(){
   let initialTranslateValue = - (carouselWidth + carouselMargin) * carouselItemCount;
   carouselItems.style.transform = 'translateX('+initialTranslateValue+'px)';
 }
   
 //이전다음버튼 클릭 시 이동 구현
 rightBtn.addEventListener('click',function(){
   moveItem(currentIndex + 1);
 })
 
 leftBtn.addEventListener('click',function(){
   moveItem(currentIndex - 1);
 })
   
 function moveItem(num){
   carouselItems.style.left = - num * (carouselWidth + carouselMargin)+'px';
   currentIndex = num;
   //양끝 Item일때 위치를 앞쪽 Item으로 이동.
   if(currentIndex == carouselItemCount || currentIndex == - carouselItemCount){
     setTimeout(function(){
       carouselItems.classList.remove('animated');
       carouselItems.style.left = '0px';
       currentIndex = 0;
     },500);
     setTimeout(function(){
       carouselItems.classList.add('animated');
     },600);
   }
 }