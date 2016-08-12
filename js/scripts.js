$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();
    var devInput = $("input:radio[name=devType]:checked").val();

    $(".recommendation").text(nameInput + ", here are our course recommendations for you!");

    // if (devInput === "frontend") {
    //
    // };

    event.preventDefault();
  });
});
