$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();
    var devInput = $("input:radio[name=devType]:checked").val();
    var bizInput = $("input:radio[name=bizSize]:checked").val();
    var osInput = $("#osPref").val();
    var buildInput = $("input:radio[name=buildType]:checked").val();

    // $(".recommendation").text(nameInput + ", here are our course recommendations for you!");

    if (devInput === "frontend") {
      $("#css").show();
      $("#java").show();
      $("#csharp").show();
      $("#php").hide();
      $("#ruby").hide();
    } else {
      if (bizInput === "small") {
        $("#ruby").show();
        $("#php").show();
        $("#css").show();
        $("#csharp").hide();
        $("#java").hide();
      } else if (bizInput === "large" && osInput !== "neither") {
        $("#csharp").show();
        $("#java").show();
        $("#php").show();
        $("#css").hide();
        $("#ruby").hide();
      } else {
        if (buildInput === "web" || buildInput === "cms" || buildInput === "webapp") {
          $("#css").show();
          $("#ruby").show();
          $("#php").show();
          $("#java").hide();
          $("#csharp").hide();
        }
      }
    }

    event.preventDefault();
  });
});
