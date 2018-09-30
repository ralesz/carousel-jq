'use strict';
$(function() {
  
  let currentSlide = 0; //aktualny slajd
  $("#dot_" + currentSlide).addClass("active"); //ustaw aktywną paginację na 0
  var carouselList = $('#carousel .photo'); //pobierz foto
  var timeSlide;
  setTime();
  var z = 400;

  //funkcja przesuwania slajdu w prawo  
  function changeSlide () {
      carouselList.animate({'marginLeft':-z}, 500, moveFirstSlide);
      nextslide()
  }

  function changeSlide1 () {
      carouselList.animate({'marginLeft':-z}, 0, moveFirstSlide);
      nextslide1()
  }

  function nextslide() {
        if(currentSlide > 3){
        currentSlide = 0;
        $(".pagination li").removeClass("active");
        $("#dot_" + currentSlide).addClass("active");
        } 
        else {
          currentSlide++;
          $(".pagination li").removeClass("active");
          $("#dot_" + currentSlide).addClass("active");
        }
  }

  function nextslide1() {
      if(currentSlide > 3){
      currentSlide = 0;
      } 
      else {
        currentSlide++;
      }
  }

  // funkcja przesuwania slajdu w lewo  
  function changeSlideBack() {
      moveEndSlide();
      carouselList.animate({'marginLeft':0}, 500);
      backslide()
    }

  function changeSlideBack1() {
      moveEndSlide();
      carouselList.animate({'marginLeft':0}, 0);
      backslide1();
    }
    
  function backslide() {
        if(currentSlide < 1){
          currentSlide = 4;
          $(".pagination li").removeClass("active");
          $("#dot_" + currentSlide).addClass("active");
        } 
        else {
          currentSlide--;
          $(".pagination li").removeClass("active");
          $("#dot_" + currentSlide).addClass("active");
        }
    }

  function backslide1() {
      if(currentSlide < 1){
        currentSlide = 4;
      } 
      else {
        currentSlide--;
        
      }
  }
 

  //  dodanie slajdu pierwszego na koncu
  function moveFirstSlide() {
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }

  // funkcja dodania slajdu ostatniego przed pierwszym
  function moveEndSlide () {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({marginLeft:-400});
  }
  
  //funkcja animacji/ przesunięcia zgodna z wybranym point
  function anim_slide (point) {
  carouselList.animate({'marginLeft': -400 * point}, 0);
  }

  //czekaj na kliknięcie dowolnej paginacji
  $(".pagination .dot").on('click', dots);
  
  //funkcja wyboru zdjecia z dolnej paginacji
  function dots () {
    var point = $(this).index();
    $(".pagination .dot").removeClass("active");
    $("#dot_" + point).addClass("active");
    clearInterval(timeSlide);
    
    var nslideback = currentSlide; //cofamy slajdy do początku, zgodnie z ostatnim currentSlide
    for(var i = 0; i < nslideback; i++){
    changeSlideBack1();
  }

  // przesunś slajdy do wybranego punktu 'point'
  for(var i = 0; i <= point; i++){  
    anim_slide (point);
  }

  var nslideforward = point; //zmienna: przesuwamy do wybranego slajdu
  for(var i = 0; i < nslideforward; i++){
    changeSlide1();
  }
    
  setTime(); 
};

// funkcja ustawienia setinterval   
  function setTime() {
    timeSlide = setInterval(changeSlide, 3000)
  };  

// strzałka w prawo  
  var nextSlide = $("#btn-next");
  nextSlide.click(function () {
    clearInterval(timeSlide);
    changeSlide();
    setTime();
  });

  // strzałka w lewo
  var prevSlide = $("#btn-prev");
  prevSlide.click(function () {
    clearInterval(timeSlide);
    changeSlideBack();
    setTime();
  });

});







