'use strict';
$(function() {
  
  let currentSlide = 0; //bierzący slajd
  $("#dot_" + currentSlide).addClass("active");
  var carouselList = $('#carousel .photo');
  var timeSlide;
  setTime();
  

  //funkcja przesuwania slajdu w prawo  
  function changeSlide () {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    
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

  // funkcja przesuwania slajdu w lewo  
  function changeSlideBack() {
    moveEndSlide();
    carouselList.animate({'marginLeft':0}, 500);
	
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
  };

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
  
  //funkcja animacji
  function anim_slide (point) {
    carouselList.animate({'marginLeft': -400 * point}, 500);
  }

  //czekaj na kliknięcie paginacji
  $(".pagination .dot").on('click', dots);
  
  //funkcja wyboru zdjecia z dolnej paginacji
  function dots () {
  var point = $(this).index();
  console.log(point);
  $(".pagination .dot").removeClass("active");
  $("#dot_" + point).addClass("active");
  clearInterval(timeSlide);
  anim_slide (point);
  setTime();
  currentSlide == point;
};


// funkcja ustawienia setintervalu    
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







