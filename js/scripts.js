$(document).ready(function(){
  $("form").submit(function(event){
    $(".ride").hide();
    var canIRide = $("#feet").val();
    event.preventDefault();

    if (canIRide === "under 4 feet") {
      $("#under4ft").show();
      console.log(canIRide);

    } else if (canIRide === "between 4-5 feet") {
      $("#between4-5ft").show();
      console.log(canIRide);
    } else {
      $("#over5ft").show();
    }
  });

});
