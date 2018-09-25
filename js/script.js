$(function() {
  let currentSlide = 0;
  $("#dot_" + currentSlide).addClass("active");
  var carouselList = $('#carousel .photo');
  const time = setInterval(changeSlide, 3000);

  function changeSlide () {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    
      if(currentSlide > 3){
      currentSlide = 0;
      $(".pagination li").removeClass("active");
      $("#dot_" + currentSlide).addClass("active");
      console.log(currentSlide); 
      } 
      else {
        currentSlide++;
        $(".pagination li").removeClass("active");
        $("#dot_" + currentSlide).addClass("active");
        console.log(currentSlide); 
      }
  
    function moveFirstSlide() {
      var firstItem = carouselList.find('li:first');
      var lastItem = carouselList.find('li:last');
      lastItem.after(firstItem);
      carouselList.css({marginLeft:0});
    }
  }


  function changeSlideBack() {
    moveEndSlide();
    carouselList.animate({'marginLeft':0}, 500);
	
      if(currentSlide < 1){
        currentSlide = 4;
        $(".pagination li").removeClass("active");
        $("#dot_" + currentSlide).addClass("active");
        console.log(currentSlide);  
      } 
      else {
        currentSlide--;
        $(".pagination li").removeClass("active");
        $("#dot_" + currentSlide).addClass("active");
        console.log(currentSlide);
      }
      
      function moveEndSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-400});
      }
  };

  function activepoint () {

    // var point = $(".pagination .dot");
    // point.on('click', '.dot', function() {

    $(".pagination .dot").on('click', function(){
    var point = $(this).index();
    console.log(point);
    $(".pagination .dot").removeClass("active");
    $("#dot_" + point).addClass("active");
    carouselList.animate({'marginLeft': -400 * point}, 100);
    currentSlide = point;
    });	
  }


    var active = $(".dot");
    active.click(function () {
      clearInterval(time);
      activepoint();
    });


  var nextSlide = $("#btn-next");
  nextSlide.click(function () {
    clearInterval(time);
    changeSlide();
  });

  var prevSlide = $("#btn-prev");
  prevSlide.click(function () {
    clearInterval(time);
    changeSlideBack();
  });

});