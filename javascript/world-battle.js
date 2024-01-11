// initial declarations
let i = 0;
let images = ["images/card1.jpg", "images/card2.jpg", "images/card3.jpg", "images/card4.jpg", "images/card5.jpg", "images/card6.jpeg"];
let activeIndex = 0;

//slider functionality
function handleChange() {
  document.slide.src = images[i];
  updateActiveLi();
}

// slider previous functionality
function previous() {
  if (i === 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  activeIndex = i;
  handleChange();
}

// slider next functionality
function next() {
  if(i === images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  activeIndex = i;
  handleChange();
}

// show image on hover
function showImage(index) {
  isMouseOverSlider = true;
  i = index;
  activeIndex = i;
  handleChange();
}

// hide image on mouseout
// function hideImage() {
//   i = 0;
//   activeIndex = i;
//   handleChange();
// }

window.onload = handleChange;


function updateActiveLi() {
  const lis = document.querySelectorAll('.control-numbers ul li');
  const as = document.querySelectorAll('.control-numbers li a');
  lis.forEach((li, index) => {
    li.classList.remove('active');
    if (index === activeIndex) {
      li.classList.add('active');
    }
  });
  as.forEach((a, index) => {
    a.classList.remove('active');
    if (index === activeIndex) {
      a.classList.add('active');
    }
  });
}
