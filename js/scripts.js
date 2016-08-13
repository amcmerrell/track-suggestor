$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();
    var devInput = parseInt($("input:radio[name=devType]:checked").val());
    var bizInput = parseInt($("input:radio[name=bizSize]:checked").val());
    var osInput = parseInt($("#osPref").val());
    var buildInput = parseInt($("input:radio[name=buildType]:checked").val());
    var result = devInput + bizInput + osInput + buildInput;

    if (nameInput === "") {
      $(".error").fadeIn();
      $("#css").hide();
      $("#ruby").hide();
      $("#php").hide();
      $("#java").hide();
      $("#csharp").hide();
    } else if (result >= 4 && result < 10) {
      $("form").hide();
      $("#recommendation").text(nameInput + ", here are our course recommendations for you!");
      $("#css").fadeIn(2000);
      $("#ruby").fadeIn(4000);
      $("#php").fadeIn(6000);
      $("#java").hide();
      $("#csharp").hide();
      $(".error").hide();
    } else if (result >= 10 && result < 15) {
      $("form").hide();
      $("#recommendation").text(nameInput + ", here are our course recommendations for you!");
      $("#ruby").fadeIn(2000);
      $("#php").fadeIn(4000);
      $("#java").fadeIn(6000);
      $("#css").hide();
      $("#csharp").hide();
      $(".error").hide();
    } else {
      $("form").hide();
      $("#recommendation").text(nameInput + ", here are our course recommendations for you!");
      $("#php").fadeIn(2000);
      $("#java").fadeIn(4000);
      $("#csharp").fadeIn(6000);
      $("#css").hide();
      $("#ruby").hide();
      $(".error").hide();
    };
    event.preventDefault();
  });
});
    //Below is initial branching logic that did not work.
    // if (devInput === "frontend") {
    //   $("#css").show();
    //   $("#java").show();
    //   $("#csharp").show();
    //   $("#php").hide();
    //   $("#ruby").hide();
    // } else {
    //   if (bizInput === "small") {
    //     $("#ruby").show();
    //     $("#php").show();
    //     $("#css").show();
    //     $("#csharp").hide();
    //     $("#java").hide();
    //   } else if (bizInput === "large") {
    //     $("#csharp").show();
    //     $("#java").show();
    //     $("#php").show();
    //     $("#css").hide();
    //     $("#ruby").hide();
    //   } else {
    //     if (buildInput === "web" || buildInput === "cms" || buildInput === "webapp") {
    //       $("#css").show();
    //       $("#ruby").show();
    //       $("#php").show();
    //       $("#java").hide();
    //       $("#csharp").hide();
    //     } else {
    //         $("#java").show();
    //         $("#csharp").show();
    //         $("#ruby").show();
    //         $("#css").hide();
    //         $("#php").hide();
    //       };
