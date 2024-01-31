/**
   * Preloader
   */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var preloader = document.querySelector("#preloader");
    preloader.style.display = "none";
  }, 350);
});

/**
   * Resume Section
   */
function toggleElement() {
  var targetElement = document.getElementById('targetElement');
  if (targetElement.style.display === 'none') {
    targetElement.style.display = 'block';
  } else {
    targetElement.style.display = 'none';
  }
}


function toggleElement1() {
  var targetElement = document.getElementById('targetElement1');
  if (targetElement.style.display === 'none') {
    targetElement.style.display = 'block';
  } else {
    targetElement.style.display = 'none';
  }
}

function toggleElement2() {
  var targetElement = document.getElementById('targetElement2');
  if (targetElement.style.display === 'none') {
    targetElement.style.display = 'block';
  } else {
    targetElement.style.display = 'none';
  }
}


/**
   * Contact Section
   */

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Form submitted!');
});