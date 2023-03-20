console.log("Your javascript is loading correctly!");

// Smooth Scroll Interaction
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$("#smooth-scroll").on("click", function () {
  console.log("You clicked on #smooth-scroll");
});
