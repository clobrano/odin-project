sliderCur = 1;
sliderNext = 2;

// Let the first image appear as soon the
// page is loaded.
$(document).ready(function() {
    $("#slider > img#" + sliderCur).fadeIn(300);

    startSlider();
});


// Start slider loop
function startSlider() {
    // Count the number of images
    count = $("#slider > img").size();

    // set interval function and timeout
    loop = setInterval(function() {
        // let all image disappear
        $("#slider > img").fadeOut(300);
        // let next image appear
        $("#slider > img#" + sliderNext).fadeIn(300);

        // Update image counter (sliderCur is
        // needed for next() and prev() functions)
        sliderCur = sliderNext;
        sliderNext = (sliderNext + 1);
        if (sliderNext > count) {
            sliderNext = 1;
        }
    }, 2000);
}

// clear slider loop
function stopSlider() {
    window.clearInterval(loop);
}

function prev() {
    newSlide = sliderCur - 1;
    showSlide(newSlide);
}

function next() {
    newSlide = sliderCur + 1;
    showSlide(newSlide);
}

function showSlide(id) {
    stopSlider();
    if (id < 1) {
        id = count;
    } else if (id > count){
        id = 1;
    }

    $("#slider > img").fadeOut(300);
    $("#slider > img#" + id).fadeIn(300);
    sliderCur = id;
    sliderNext = (id + 1) % count;
    startSlider();
}

// Stop slider loop when mouse is over the images
$('#slider > img').hover(
   function() {
       stopSlider();
   },
   function() {
       startSlider();
   }
  )
