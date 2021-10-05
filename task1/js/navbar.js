$(".dropbtn").click(function() {
  $(".dropdown-content").toggle();
  $(this).toggleClass("active");
});

$(document).on("click", function(event){
  var $trigger = $(".dropdown");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".dropdown-content").slideUp("fast");
      $(".dropbtn").removeClass("active");
  }            
});

function hover(element) {
  element.setAttribute('src', 'images/icons/hover/' + element.className + '.png');
};

function unhover(element) {
  element.setAttribute('src', 'images/icons/' + element.className + '.png');
};