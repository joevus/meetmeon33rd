// global code to be shared with other gallery js files

var photoNames = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "ma",
  "mb",
  "mc",
  "md",
  "me",
  "n",
  "na",
  "nb",
  "o",
  "p",
  "q",
  "r",
  "ra",
  "rb",
  "s",
  "t",
  "u"
];

// index indicating which photo we're displayig in viewer
var photoIdx = 0;

$(document).ready(function(){


    // keep track of if recently changed photo, in order to not make them
    // change too quickly
    var recentlyChanged = false;

    // index to track which image is in viewer. Starts on 0.


//*** Not working in IE yet ***

    document.getElementById("viewer").addEventListener("wheel", function(e){
      e.preventDefault();

      // prevent them from changing another image immediately
      if(recentlyChanged) return;
      recentlyChanged = true;
      setTimeout(function(){recentlyChanged = false}, 300);


      if(e.deltaY > 0) { // scrolling up
        if(photoIdx < photoNames.length - 1 ){ // not at last image yet
          photoIdx++
        } else {
          // reset when on the last image
          photoIdx = 0;
        }
      } else{ // scrolling down
        if(photoIdx === 0){ // at first image
          // go to last image
          photoIdx = photoNames.length - 1;
        } else {
          // go back by one
          photoIdx--;
        }
      }

      this.style.backgroundImage = `url('../images/gallery/${photoNames[photoIdx]}')`;
    });
});
