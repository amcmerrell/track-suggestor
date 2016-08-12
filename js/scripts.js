$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = parseInt($("input#name").val());
    var devInput = parseInt($("input:radio[name=devType]:checked").val());
    var bizInput = parseInt($("input:radio[name=bizSize]:checked").val());
    var osInput = parseInt($("#osPref").val());
    var buildInput = parseInt($("input:radio[name=buildType]:checked").val());
    var result = devInput + bizInput + osInput + buildInput;

    // $(".recommendation").text(nameInput + ", here are our course recommendations for you!");

    if (result >= 4 && result < 10) {
      $("#css").show();
      $("#ruby").show();
      $("#php").show();
      $("#java").hide();
      $("#csharp").hide();
    } else if (result >= 10 && result < 15) {
      $("#ruby").show();
      $("#php").show();
      $("#java").show();
      $("#css").hide();
      $("#csharp").hide();
    } else {
      $("#csharp").show();
      $("#php").show();
      $("#java").show();
      $("#css").hide();
      $("#ruby").hide();
    };

    event.preventDefault();
  });
});

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
