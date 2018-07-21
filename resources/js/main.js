$(document).ready(function(){

$(".page-navigation .item a").on("click", function(event){
  debugger
  event.preventDefault();
  var headerHeight = $("header").height();
  var idname = $(this).attr("href");
  var originalLocation = $(idname).offset().top;
  var newLocation = originalLocation - headerHeight;
  $("html").animate({
    scrollTop : newLocation
  });
});
 $(".regular").slick({
          dots: true,
          infinite: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 3000,
      });
});
