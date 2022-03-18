$(document).ready(function(){


$("#dropM1").mouseover(function(){
  $("#drop1").show("2000");
});
$(".f").mouseover(function(){
  $("#drop1").hide("2000");
});


$("#instagram").mouseover(function(){
  $("#instagram").animate({width:"160px"},500);
});

$("#gmail").mouseover(function(){
  $("#gmail").animate({width:"160px"},500);
});

$("#linkedin").mouseover(function(){
  $("#linkedin").animate({width:"160px"},500);
});

$(".imgcontact").mouseout(function(){
  $(".imgcontact").animate({width:"120px"},200);
});



});