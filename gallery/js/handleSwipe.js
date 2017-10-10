$(document).ready(function(){

  // significant sources for this code:
  // javascriptkit.com/javatutors/touchevents2.shtml
  // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android

  // will be swiping on gallery viewer
  var viewer = document.getElementById("viewer");

  viewer.addEventListener('touchstart', handleTouchStart, false);
  viewer.addEventListener('touchend', handleTouchEnd, false);

  var xStart;
  var yStart;
  var dist;
  var threshold = 70; // required min distance traveled to be considered swipe
  // vertical distance traveled that will prevent a swipe from occuring
  var vertPrevent = 100;
  var allowedTime = 400; // max time allowed to travel threshold distance
  var elapsedTime;
  var startTime;

  function handleRightSwipe(e) {
    // bring previous photo
    if(photoIdx === 0){ // at first image
      // go to last image
      photoIdx = photoNames.length - 1;
    } else {
      // go back by one
      photoIdx--;
    }

    e.target.style.backgroundImage = `url('../images/gallery/${photoNames[photoIdx]}')`;
  }

  function handleLeftSwipe(e) {
    // bring next photo
    if(photoIdx < photoNames.length - 1 ){ // not at last image yet
      photoIdx++
    } else {
      // reset when on the last image
      photoIdx = 0;
    }

    e.target.style.backgroundImage = `url('../images/gallery/${photoNames[photoIdx]}')`;
  }

  function handleTouchStart(e) {
    var touchObj = e.changedTouches[0];
    dist = 0;
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime(); // record time when finger first makes contact with surface
    e.preventDefault()
  }

  viewer.addEventListener('touchmove', function(e) {
    // nothing doing yet.
  }, false);

  function handleTouchEnd(e) {
    var touchObj = e.changedTouches[0];
    dist = touchObj.pageX - startX // get total dist traveled by finger while in contact with surface
    elapsedTime = new Date().getTime() - startTime // get time elapsed
    // check that swipe occured:
    // that elapsed time is within specified, horizontal dist traveled >= threshold,
    //  and vertical distance traveled <= vertPrevent
    if(elapsedTime <= allowedTime && Math.abs(dist) >= threshold && Math.abs(touchObj.pageY - startY) <= vertPrevent){
      // check if right or left swipe
      if(dist > 0) {
        handleRightSwipe(e);
      } else {
        handleLeftSwipe(e);
      }
    }
  }

});
