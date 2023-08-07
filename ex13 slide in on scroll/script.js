function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  //   console.log(window.scrollY);
  sliderImages.forEach((sliderImage) => {
    // METADE DA IMAGEM
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    console.log(slideInAt);
    // PARTE DE BAIXO DA IMAGEM
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotSctolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotSctolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
