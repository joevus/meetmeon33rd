$(document).ready(function(){
  console.log("viewer height read");
  console.log(window.innerHeight);
  // for size mobile, make viewer's height the full height of screen
  if(window.innerWidth <= 768) {
    document.getElementById("viewer").style.height = window.innerHeight + "px";
  }

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
      console.log("resize event fired");
      if(window.innerWidth <= 768) {
        var viewer = document.getElementById("viewer");
        viewer.style.height = window.innerHeight + "px";

        // if in landscape mode (or screen wider than it is tall) scroll to top of
        // viewer
        if(window.innerWidth > window.innerHeight){
          var rect = viewer.getBoundingClientRect();
          // since rect.top is relative to viewport, add vertical scroll position.
          var viewerTop = rect.top + window.scrollY;
          console.log(viewerTop);
          window.scroll(0, viewerTop);
        }
      }
    }
  }());

})
