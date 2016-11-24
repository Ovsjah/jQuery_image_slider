/* build using jQuery version 1.9.1 */

sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {
  $("#slider > img#1").fadeIn(300); // image with id 1 fades in
  startSlider();  // runs the function
});

function startSlider() {
  count = $("#slider > img").size();  // counts all images using jQuery size()
  
  /* creates an interval using jQuery setInterval() that takes incognito func as the first
  parameter and an interval in ms as the second parameter */
  loop = setInterval(function() {
    
    if(sliderNext > count) {
      sliderNext = 1;
      sliderInt = 1;
    };
    
    $("#slider > img").fadeOut(300); // img becomes invisible in 300ms
    $("#slider > img#" + sliderNext).fadeIn(300); // img becomes visible in 300ms
    
    sliderInt = sliderNext;  // updates vars
    sliderNext += 1; // same shit here
    
  }, 3000);
};

// creates function that handles the onclick events in our html doc
function prev() {
  newSlide = sliderInt - 1;
  showSlide(newSlide);
};

function next() {
  newSlide = sliderInt + 1;
  showSlide(newSlide);
};

function stopLoop() {
  window.clearInterval(loop); // function that stops our loop (Interval)
};

function showSlide(id) {
  stopLoop();
  if(id > count) {
    id = 1;
  } else if (id < 1) {
    id = count;
  };
    
  $("#slider > img").fadeOut(300); // img becomes invisible in 300ms
  $("#slider > img#" + id).fadeIn(300); // img becomes visible in 300ms
    
  sliderInt = id;  // updates vars
  sliderNext = id + 1; // same shit here
  startSlider();
};

// selects img when you hover over it stops out loop and turns it on when you move the mouse 
$("#slider > img").hover(
  function() {
    stopLoop();
  },
  function() {
    startSlider();
  }
);

