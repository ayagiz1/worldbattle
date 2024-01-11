// initial declarations
let i = 0;
let images = ["images/card1.jpg", "images/card2.jpg", "images/card3.jpg", "images/card4.jpg", "images/card5.jpg", "images/card6.jpeg"];


//slider functionality
function handleChange() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
  i++;
  } else {
  i = 0;
  }
  }
  
  // slider previous functionality
  
  function previous() {
  if (i === 0) {
  i = images.length - 1;
  } else {
  i--;
  }
  document.slide.src = images[i];
  }
  
  // slider next functionality
  function next() {
  if(i === images.length - 1) {
  i = 0;
  } else {
  i++;
  }
  document.slide.src = images[i];
  }
  
  window.onload = handleChange;