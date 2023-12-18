const slider = function(){
    const slides = document.querySelectorAll('.slide');
    // console.log(slides)
    let currentSlide = 0;
    const maxSlide = slides.length;
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotsContainer = document.querySelector('.dots');
    
    const createDots = function(){
      slides.forEach((slide,index)=>{
    return dotsContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${index}"></button>`)})
    }
    
    
    // activate dots
    
    const activeDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot =>dot.classList.remove('dots__dot--active'));
      
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    }
    
    // go to slide functions
    
    const goToSlide = function(curSlide){
      slides.forEach((slide, index) => slide.style.transform = `translateX(${(index-curSlide) * 100}%)`);
      // console.log(curSlide);
    }
    
    const nextSlide = function(){
      if(currentSlide === maxSlide - 1){
        currentSlide = 0;
      }else{
      currentSlide++;
      }
      goToSlide(currentSlide);
      activeDot(currentSlide);
    }
    
    const prevSlide = function(){
      if(currentSlide === 0){
        currentSlide = maxSlide - 1;
      }else{
      currentSlide--;
      }
      goToSlide(currentSlide);
        activeDot(currentSlide);
    }
    
    //implementing slide button
    const init = function(){
    createDots();
    goToSlide(0);
    activeDot(0);
    }
    init();
    btnRight.addEventListener('click',nextSlide);
    btnLeft.addEventListener('click',prevSlide);
    
    document.addEventListener('keydown',function(e){
      if(e.key === 'ArrowLeft') prevSlide();
      if(e.key === 'ArrowRight') nextSlide();
    });
    
    
    dotsContainer.addEventListener('click',function(e){
      if(e.target.classList.contains('dots__dot')){
        const {slide} =  e.target.dataset;
        // console.log(slide);
        goToSlide(slide);
          activeDot(slide);
      }
    });
    }

    slider();