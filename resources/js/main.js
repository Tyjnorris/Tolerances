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
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
  });
$("#menu").on("click",function(event){
  event.preventDefault();
  $(".mobile-list").slideToggle();
})
});
