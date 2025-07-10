/* FAQ Section */
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item, .fiq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.setAttribute("tabindex", "0");

    const toggleItem = () => {
      item.classList.toggle("active");
    };

    question.addEventListener("click", toggleItem);
    question.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleItem();
      }
    });
  });
});

/* journal */
function debounce(fn, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

class Slider {
  constructor(root) {
    this.slider = root;
    this.track = root.querySelector(".journal-cards");
    this.prev = root.querySelector(".slider-btn.prev");
    this.next = root.querySelector(".slider-btn.next");

    this.slides = Array.from(this.track.children);
    this.currentIndex = 0;
    this.slideWidth = this.slides[0].offsetWidth + 20; // +gap

    this.update = this.update.bind(this);
    this.move = this.move.bind(this);

    this.prev.addEventListener("click", () => this.move(-1));
    this.next.addEventListener("click", () => this.move(+1));

    window.addEventListener("resize", debounce(this.update, 100));
    this.update();
  }

  update() {
    this.slideWidth = this.slides[0].offsetWidth + 20; // +gap
    this.track.style.transition = "transform 0.4s ease";
    this.track.style.transform = `translateX(${-this.currentIndex * this.slideWidth}px)`;
  }

  move(direction) {
    const maxIndex = this.slides.length - 1;
    const nextIndex = this.currentIndex + direction;
    if (nextIndex < 0 || nextIndex > maxIndex) return;

    this.currentIndex = nextIndex;
    this.track.style.transform = `translateX(${-this.currentIndex * this.slideWidth}px)`;
  }
}

function initJournalSlider() {
  const root = document.querySelector(".journal-slider-wrapper");
  if (root) new Slider(root);
}

document.addEventListener("DOMContentLoaded", () => {
  initJournalSlider();
});


/* carousel */

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 1;
let slideWidth = slides[0].offsetWidth + 20; //80% + margin-right


const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll('.carousel-slide');


track.style.transform = `translateX(-${slideWidth * index}px)`;


window.addEventListener('resize', () => {
  slideWidth = slides[0].offsetWidth + 20;
  track.style.transition = 'none';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
});


nextBtn.addEventListener('click', () => {
  if (index >= allSlides.length - 1) return;
  index++;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
});

prevBtn.addEventListener('click', () => {
  if (index <= 0) return;
  index--;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${slideWidth * index}px)`;
});


track.addEventListener('transitionend', () => {
  if (allSlides[index].id === 'first-clone') {
    track.style.transition = 'none';
    index = 1;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }
  if (allSlides[index].id === 'last-clone') {
    track.style.transition = 'none';
    index = allSlides.length - 2;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }
});

/*pointer */
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      burger.classList.toggle('open');
    });
  } else {
    console.warn("burger-toggle или nav-menu не найдены в DOM");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".journal-slider-track");
  const cards = document.querySelectorAll(".journal-card");
  const prev = document.querySelector(".slider-btn.prev");
  const next = document.querySelector(".slider-btn.next");

  let currentIndex = 0;

  const updateSlider = () => {
    const slideWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  if (window.innerWidth <= 768 && track && prev && next) {
    next.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });

    prev.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        updateSlider();
      } else {
        track.style.transform = "none";
      }
    });
  }
});



