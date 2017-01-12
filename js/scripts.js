$(document).ready(function(){
  var canIRide = $("#feet").val();
  $().submit(function(event){
    event.preventDefault();

    if (canIRide === "under 4 feet") {
      $("#under4ft").show();
    }
  });

});
