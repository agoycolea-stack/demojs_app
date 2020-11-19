$(document).ready(function() {
  console.log( "ready!" );
  $(".close").click(hideAlert);
  $(".segundo").click(toggleContainer);
  $(".collapsible").click(toggleCollapsible);
});

function hideAlert(){
  $(".alert-warning").hide();
}

function toggleContainer(){
  var containerId = $(this).data("target");
  $(containerId).toggle();
}

function hideText() {
  var id_object=$(this).data("target");
  $(id_object).toggle();
  $(".collapse").not(id_object).hide();
}