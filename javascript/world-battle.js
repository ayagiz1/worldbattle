// initial declarations
let i = 0;
let images = ["images/crsl1.jpg", "images/crsl2.jpg", "images/crsl3.jpg", "images/crsl4.jpg", "images/crsl5.jpg", "images/crsl6.jpg", "images/crsl7.jpg", "images/crsl8.jpg", "images/crsl9.jpg", "images/crsl10.jpg"];
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
