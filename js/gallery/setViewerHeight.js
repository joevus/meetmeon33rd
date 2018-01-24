/* Desired changes

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
        document.getElementById("viewer").style.height = "580px";
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
        viewer.style.height = "350px";
      } else {
        // full viewport height when landscape mode
        viewer.style.height = window.innerHeight + "px";
      }
    }
  }

})
