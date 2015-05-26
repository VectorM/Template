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
});
