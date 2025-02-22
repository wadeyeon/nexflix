"use strict";

// faq
const faqCardContainer = document.querySelector(".faq__card-container");
faqCardContainer.addEventListener("click", (e) => {
  const faqNum = e.target.dataset.faq;
  const faqBody = document.querySelector(`[data-faq=faq_body_${faqNum}]`);
  const faqIcon = e.target.querySelector("i");
  faqBody.classList.toggle("hide");
  faqIcon.classList.toggle("xi-plus");
  faqIcon.classList.toggle("xi-close");
});
