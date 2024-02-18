$(function(){
   $(".navbar a, footer a").on("click", function(event){
       
       event.preventDefault();
       var hash = this.hash;
       
       $("body, html").animate({scrolltop: $(hash).offset().top}, 900, function(){window.location.hash = hash;})
   }); 
});