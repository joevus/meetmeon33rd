/* Desired changes

    - Make the viewer less than 100% of screen height when in mobile potrait mode
    - Make the page not scroll up when user means to swipe left or right on viewer
    - Give a border, same color as background, to viewer so that when in
    in landscape mode, it has some extra to cover the entire screen in dark gray
    when it isn't aligned perfectly.
*/
$(document).ready(function(){

  checkAndSetMobileScreenSize();

  (function() {
    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in
      // the queue
      if(!resizeTimeout) {
        resizeTimout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();

          // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
      }
    }

    function actualResizeHandler() {

      checkAndSetMobileScreenSize()

        // **Discontinue feature for now**
        // if in landscape mode (or screen wider than it is tall) scroll to top of
        // viewer
        // if(window.innerWidth > window.innerHeight){
        //   var rect = viewer.getBoundingClientRect();
        //   // since rect.top is relative to viewport, add vertical scroll position.
        //   var viewerTop = rect.top + window.scrollY;
        //   window.scrollTo(0, viewerTop);
        // }
      if(window.innerWidth > 768) {
        // set screen back to size for anything larger than xs (768px)
        // mainly for if desktop user makes window small,
        // then large again.
        document.getElementById("viewer").style.height = "640px";
      }

    }
  }());


  // Check if mobile size and whether portrait or landscape. Set screen size
  // accordingly.

  function checkAndSetMobileScreenSize() {
    if(window.innerWidth <= 768) {
      var viewer = document.getElementById("viewer");
      if(window.innerWidth < window.innerHeight) {
        // less than full viewport height if portrait mode
        // viewer.style.height = window.innerHeight * 0.85 + "px";
        viewer.style.height = "350px";
      } else {
        // full viewport height when landscape mode
        viewer.style.height = window.innerHeight + "px";
      }
    }
  }

})
