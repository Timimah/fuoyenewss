document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarCollapse');
  
    navbarToggler.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.add('show');
      }
    });
  });
  

const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});

const newsFeed = [
  {
    title: "lorem ipsum dolor sit amet.",
    author: "Damaris Collings",
    image: "assets/R.jpeg",
  },
  {
    title: "lorem ipsum dolor sit amet.",
    author: "Damaris Collings",
    image: "assets/R.jpeg",
  },
  {
    title: "lorem ipsum dolor sit amet.",
    author: "Damaris Collings",
    image: "assets/R.jpeg",
  },
  {
    title: "lorem ipsum dolor sit amet.",
    author: "Damaris Collings",
    image: "assets/R.jpeg",
  },
];

document.getElementById("feed").innerHTML += newsFeed.map((data) => {
  return `
        <div class="card mb-4 p-0" style="width: 100%; max-width: 30em; margin-right: 2em">
        <img src=${data.image} alt="" class="rounded" style="width: 100%; height: auto; object-fit: cover; opacity: 80%;">
        <div class="pt-6 " style="position: absolute; background-color: black; width: 100%; height: 100%; opacity: 70%; text-align: center;">
            <div class="fs-3" style="color: white">${data.title}.</div>
            <div style="font-size: 0.8em; color: grey;">${data.author}</div>
        </div>
        </div>`
;
}).join('');

const feedContainer = document.getElementById("feed");
const feedScrollWidth = feedContainer.scrollWidth;
let scrollDirection = 1;
let currentScrollLeft = 0;

window.addEventListener("load", () => {
  setInterval(() => {
    if (currentScrollLeft >= feedScrollWidth - feedContainer.offsetWidth) {
      scrollDirection = -1;
    } else if (currentScrollLeft <= 0) {
      scrollDirection = 1;
    }

    currentScrollLeft += scrollDirection;
    feedContainer.scrollTo(currentScrollLeft, 0);
  }, 15);
});
