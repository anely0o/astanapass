/* faq section*/
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item, .fiq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      item.classList.toggle("active")
    })
  })

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.setAttribute("tabindex", "0")

    question.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        item.classList.toggle("active")
      }
    })
  })


  const firstItem = document.querySelector(".faq-item, .fiq-item")
  if (firstItem && firstItem.classList.contains("active")) {

  }
})
