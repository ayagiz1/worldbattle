// initial declarations
let i = 0;
let images = ["https://picsum.photos/id/137/500/300","https://picsum.photos/id/237/500/300", "https://picsum.photos/500/300"];


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