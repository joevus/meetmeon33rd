$(document).ready(function(){
    var photoNames = [
      "Bistro-tables.jpeg",
      "David-and-table.jpg",
      "Meditation.jpg",
      "Meditation-front.jpg",
      "Photo-Mar-05,-1-05-04 PM.jpg",
      "Photo-Nov-07-12-03-15-PM.jpg",
      "Photo-Sep-19,-5-24-01-PM.jpg",
      "Seminar-tables-meeting.jpg",
      "Sunday-Chant-1.jpg",
      "Sunday-dinner.jpg",
      "Sunday-Gauranga-breathing.jpg"
    ];

    // index to track which image is in viewer. Starts on 0.
    var i = 0;

    document.getElementById("viewer").addEventListener("wheel", function(e){
      e.preventDefault();
      console.log(`deltaY: ${e.deltaY}`);
      var img = document.getElementById("galleryImg");
      if(e.deltaY > 0) { // scrolling up
        if(i < photoNames.length - 1 ){ // not at last image yet
          i++
        } else {
          // reset when on the last image
          i = 0;
        }
      } else{ // scrolling down
        if(i === 0){ // at first image
          // go to last image
          i = photoNames.length - 1;
        } else {
          // go back by one
          i--;
        }
      }

      img.src = "../images/gallery/" + photoNames[i];
    });
});
