
// поиск на главной странице
const searchButton = document.querySelector('.header-search');
const inputSearch = document.querySelector('.input-search');
searchButton.addEventListener('click', () => {
  inputSearch.style.display = 'inline-block';
  inputSearch.focus()
  // searchButton.style.display='none'

})
inputSearch.addEventListener('blur', () => {
  searchButton.style.display = 'inline-block';
  inputSearch.style.display = 'none'
})


// фильтр multi range
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = (100 - percent) + "%";
  range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});


// ставим значение над ползунком фильтра продолжительности

const filterLeft = document.querySelector('.text-range-left');
const filterRight = document.querySelector('.text-range-right');
const filterLeftValue = document.querySelector('#input-left');
const filterRightValue = document.querySelector('#input-right');

const left = document.querySelector('.left')

filterLeft.innerHTML = filterLeftValue.value;
filterRight.innerHTML = filterRightValue.value;

filterLeftValue.addEventListener('mousedown', () => {
  filterLeftValue.addEventListener('mousemove', () => {
    filterLeft.innerHTML = filterLeftValue.value;
  })
})

filterRightValue.addEventListener('mousedown', () => {
  filterRightValue.addEventListener('mousemove', () => {
    filterRight.innerHTML = filterRightValue.value;
  })
})

// hover lesson cards

const cardsLesson = document.querySelectorAll('.card-img-block ');

cardsLesson.forEach((el) => {
  el.addEventListener('mouseover', () => {
    el.querySelector('.lesson-video-info-hover').style.display = 'flex';
    el.querySelector('.lesson-video-info-d-block').style.visibility = "hidden";
  })
  el.addEventListener('mouseout', () => {
    el.querySelector('.lesson-video-info-hover').style.display = 'none';
    el.querySelector('.lesson-video-info-d-block').style.visibility = "visible";
  })

})
