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

/*journal */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".journal-cards");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  let currentIndex = 0;
  const cardWidth = track.querySelector(".journal-card").offsetWidth + 20; // 20px — это gap

  nextBtn.addEventListener("click", () => {
    const maxIndex = track.children.length - 1;
    if (currentIndex < maxIndex) {
      currentIndex++;
      track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
  });
});

/*nav menu */
const burgerBtn = document.getElementById('burger-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-menu');

  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    burgerBtn.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    burgerBtn.classList.remove('open');
  });
