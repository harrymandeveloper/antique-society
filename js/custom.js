// This is a preloader and a typewriter animation that would look sharp,
// when used with the captions, drawing the user's attention
// to the history of each antique.

// I haven't used it on the site, but it is easy to add. - Harry


$(function () {
  /*-------------------------------------------
Load Page
---------------------------------------------*/

  $("body").waitForImages({
    finished: function () {
      preloaderCheck();
      Website();
      OpenCheck();
      $("body").jKit();
      Typewriting();
    },
    waitForAll: true,
  });

/*-------------------------------------------
Typewriting - To style and use add class .typewrite span
              This would look sharp on captions, I have just used an example caption here.
---------------------------------------------*/

  function Typewriting() {
    $(document).ready(function () {
      setTimeout(function () {
        if ($("#site-type").length) {
          $(".typewrite span").typed({
            strings: [
              "<span class='table-caption'> c. 1770 <span class='caption-hypen'> / </span>",
              "<span class='table-caption-detail'>Armchair by Michel Gourdin - France</span>",
            ],
            typeSpeed: 100,
            backDelay: 500,
            loop: false,
            contentType: "html", // or text
            // defaults to false for infinite loop
            loopCount: false,
          });
        }
      }, 3000);
    });
  }

/*-------------------------------------------
Open Check
---------------------------------------------*/

  function OpenCheck() {
    setTimeout(function () {
      hidePreloader();
    }, 1000);
  }

/*-------------------------------------------
Preloader Check
---------------------------------------------*/

  function preloaderCheck() {
    showPreloader();
    $(window).load(function () {
      hidePreloader();
    });
  }

  /*-------------------------------------------
Functions Show / Hide Preloader
---------------------------------------------*/

  function showPreloader() {
    $(".preloader").fadeIn("slow");
  }

  function hidePreloader() {
    $(".preloader").delay(2000).fadeOut("slow");
  }
}); //End
