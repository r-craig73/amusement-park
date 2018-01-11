$(document).ready(function() {


  $("#formOne").submit(function(event) {
    var inches = parseInt($("input#inches1").val());
    var feet = parseInt($("input#feet1").val());
    var totalInches = feet * 12 + inches;
    event.preventDefault();

    if ( totalInches <= 36 && totalInches > 0 ) {
      $("#ferris").show();
    };

    if ( totalInches >= 36 && totalInches <= 48 ) {
      $(".kiddieRides").show();
    };

    if ( totalInches >= 48 && totalInches <= 60) {
      $(".kiddieRides").show();
      $(".adultRides").show();
    }

    if ( totalInches >= 60 && totalInches <= 108) {
      $("#ferris").show();
      $(".adultRides").show();
    }


  });






});
