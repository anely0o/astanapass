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

/* Journal Cards Slider (simple horizontal scroll with mobile support) */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".journal-cards");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!track || !nextBtn || !prevBtn) return;

  const updateSlider = () => {
    const card = document.querySelector(".journal-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 20;
    const visibleCards = window.innerWidth < 768 ? 1 : 3;
    const totalCards = document.querySelectorAll(".journal-card").length;
    const maxPosition = totalCards - visibleCards;

    let position = 0;

    nextBtn.addEventListener("click", () => {
      if (position < maxPosition) {
        position++;
        track.style.transform = `translateX(-${cardWidth * position}px)`;
      }
    });

    prevBtn.addEventListener("click", () => {
      if (position > 0) {
        position--;
        track.style.transform = `translateX(-${cardWidth * position}px)`;
      }
    });

    // Reset transform on window resize
    window.addEventListener("resize", () => {
      track.style.transform = "translateX(0)";
      position = 0;
    });
  };

  updateSlider();
});



  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth + 20;

    let currentIndex = 0;

    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function moveSlide(direction) {
      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = slideCount - 2; // возврат к предпоследнему
      } else if (currentIndex >= slideCount - 1) {
        currentIndex = 0; // переход к первому
      }

      updateSlidePosition();
    }

    document.querySelector('.nav.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.nav.next').addEventListener('click', () => moveSlide(1));

    window.addEventListener('resize', () => {
      updateSlidePosition(); // корректируем при изменении ширины
    });

    updateSlidePosition();
  });


