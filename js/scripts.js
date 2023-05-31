$(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    $(".parallax").css("background-position", "center " + -(0.4 * scroll) + "px");
  });
  
  const text = 'Jelajahi Dunia';
  let index = 0;
  let reverse = false;
  
  function updateText() {
      const typewriterElement = document.getElementById('typewriter');
      typewriterElement.innerHTML = text.slice(0, index);
  
      if (!reverse) {
          if (index < text.length) {
              index++;
          } else {
              reverse = true;
              setTimeout(() => { index = text.length; }, 5000);
          }
      } else {
          if (index > 0) {
              index--;
          } else {
              reverse = false;
              setTimeout(() => { index = 0; }, 5000);
          }
      }
  }
  
  setInterval(updateText, 95);

  var zoom = document.getElementById('zoom');

document.querySelector('.new-image').addEventListener('mousemove', function(e) {
  zoom.style.left = e.pageX - 50 + 'px';
  zoom.style.top = e.pageY - 50 + 'px';
  zoom.style.visibility = 'visible';
});

document.querySelector('.new-image').addEventListener('mouseleave', function(e) {
  zoom.style.visibility = 'hidden';
});

$(document).ready(function() {
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }
    });
  });





  