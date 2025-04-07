$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: "0",
          },
          "slow"
        );
      });
  
    // Clique no envelope
    $(".valentines").on("click", function () {
      window.location.href = "aceita.html";
    });
  });
  