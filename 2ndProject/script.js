document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("custom-video");
    var videoContainer = document.getElementById("video-container");
  
    var startX;
    var startY;
    var endX;
    var endY;
  
    videoContainer.addEventListener("touchstart", function(event) {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    });
  
    videoContainer.addEventListener("touchend", function(event) {
      endX = event.changedTouches[0].clientX;
      endY = event.changedTouches[0].clientY;
  
      var deltaX = endX - startX;
      var deltaY = endY - startY;
  
      // Horizontal swipe
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          video.currentTime += 10; // Move 10 seconds forward
        } else {
          video.currentTime -= 10; // Move 10 seconds backward
        }
      } else { // Vertical swipe
        if (deltaY > 0) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  });
  