
function slider(){
  const sliderImages = document.querySelectorAll('.slide'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right'),
        sliderText = document.querySelectorAll('.slide-content');
  let current =  0;

   function initSlider(){
    sliderImages.forEach(slide => slide.style.display = 'none');
   }

   (function startSlider(){
     initSlider();
     sliderImages[0].style.display = 'block';
   })();
   //prev
  function  slideLeft(){
    initSlider();
    sliderImages[current - 1].style.display = 'block';
    sliderImages[current - 1].classList.toggle('.slide-active');
    current--;
  }
  //next
  function slideRight(){
    initSlider();
    sliderImages[current + 1].style.display = 'block';
    current++;
  }
   function showPrev(){
     if(current === 0){
       current = sliderImages.length;
     }
     slideLeft();
   }
   function showNext(){
     if(current === sliderImages.length - 1){
       current = -1;
     }
     slideRight();
   }
  arrowLeft.addEventListener('click', showPrev);
  arrowRight.addEventListener('click', showNext)
}
slider();

//////////////////////////
const boxShowBtn = document.querySelectorAll('.box-btn');
const boxTopRight = document.querySelectorAll('.box-top-right');
const boxTopLeft = document.querySelectorAll('.box-top-left');
console.log(boxTopLeft);

function shiftBox(e){
    boxTopRight.forEach( slide => {

      if(e.target.matches('.box-btn1') && slide.closest('.destination1')){
        slide.classList.toggle('box-active-right');

      } else if(e.target.matches('.box-btn3') && slide.closest('.destination3')){
        slide.classList.toggle('box-active-right');
      }
  })

  boxTopLeft.forEach( slide => {
    if(e.target.matches('.box-btn2') && slide.closest('.destination2')){
        slide.classList.toggle('box-active-left');

      } else if(e.target.matches('.box-btn4') && slide.closest('.destination4')){
        slide.classList.toggle('box-active-left');
      }
    })
}

boxShowBtn.forEach( btn => btn.addEventListener('click', shiftBox));
