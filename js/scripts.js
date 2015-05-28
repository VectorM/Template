$(document).ready(function() {
 
  $("#gallery").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
  });
  $(".fancybox").fancybox({
      openEffect  : 'none',
      closeEffect : 'none'
  });

  $(".cart-trigger").on('click', function(){
    $('.drop').slideToggle();
    return false;
  });

  $("body").click(function(){
    $(".dropup").fadeOut().removeClass("active");
  });

  // Prevent events from getting pass .popup
  $(".popup").click(function(e){
    e.stopPropagation();
  });
});

customForm.lib.domReady(function(){
    customForm.customForms.replaceAll();
   });