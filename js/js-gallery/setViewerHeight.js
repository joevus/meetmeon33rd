/* Desired changes
    - Make screen scroll top top of viewer when transition to landscape mode
      - the problem isn't window.scroll, it works sometimes. Perhaps a timing
      problem, async.
      - actually, probably don't want to scroll to top of viewer when resize
      event fires, it moves the screen to the viewer anytime the toolbars appear
      or disappear. Like you cannot escape the viewer in landscape mode unless
      fix it with more code. Maybe for now, forgo this feature.
    - Make the viewer less than 100% of screen height when in mobile potrait mode
    - Make the page not scroll up when user means to swipe left or right on viewer
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
      if(window.innerHeight > 768) {
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
        viewer.style.height = window.innerHeight * 0.85 + "px";
      } else {
        // full viewport height when landscape mode
        viewer.style.height = window.innerHeight + "px";
      }
    }
  }

})
