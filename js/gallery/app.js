// global code to be shared with other gallery js files

var photoNames = [
  "Bistro-tables.jpeg",
  "David-and-table.jpg",
  "Meditation.jpg",
  "Meditation-front.jpg",
  "Seminar-tables-meeting.jpg",
  "Sunday-Chant-1.jpg",
  "Sunday-dinner.jpg",
  "Sunday-Gauranga-breathing.jpg",
  "table-nicely-set.jpg",
  "yoga-backends.jpg",
  "yoga-nicole.jpg",
  "yoga-restoration.jpg"
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
