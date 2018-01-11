$(document).ready(function() {


  $("#formOne").submit(function(event) {
    var inches = parseInt($("input#inches1").val());
    var feet = parseInt($("input#feet1").val());
    var totalInches = (feet * 12) + inches;
    event.preventDefault();

    if ( totalInches <= 36 && totalInches > 0 ) {
      $(".noRides").hide();
      $("#ferris").show();
      $(".adultRides").hide();
    } else if ( totalInches > 36 && totalInches <= 48 ) {
      $(".noRides").hide();
      $(".kiddieRides").show();
      $(".adultRides").hide();
    } else if ( totalInches > 48 && totalInches <= 60) {
      $(".noRides").hide();
      $(".kiddieRides").show();
      $(".adultRides").show();
    } else if ( totalInches > 60 && totalInches <= 108) {
      $(".noRides").hide();
      $("#ferris").show();
      $(".adultRides").show();
      $("#swing").hide();
    } else {
      $(".noRides").show();
      $(".kiddieRides").hide();
      $(".adultRides").hide();
    }


  });






});
