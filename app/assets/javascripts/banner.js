$(function(){
  setInterval(function(){
    $(".slideshow ul").animate({marginLeft:-3800},3000,function(){
      $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
  }, 5000);
});

