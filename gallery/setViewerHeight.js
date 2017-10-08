$(document).ready(function(){
  console.log("viewer height read");
  console.log(window.innerHeight);
  // for size mobile, make viewer's height the full height of screen
  if(window.innerWidth <= 768) {
    document.getElementById("viewer").style.height = window.innerHeight + "px";
  }

  // Do this again when window resized
  // especially thinking of turning phone to landscape mode
  window.addEventListener("resize", function(){
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


  });

})
