document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".service-card");
  const dots = document.querySelectorAll(".dot");
  const track = document.querySelector(".services-track");

  let currentIndex = 0;

  function updateCarousel(index){

    cards.forEach(card => {
      card.classList.remove("active");
    });

    dots.forEach(dot => {
      dot.classList.remove("active");
    });

    cards[index].classList.add("active");
    dots[index].classList.add("active");

    const offset =
      cards[index].offsetLeft -
      (window.innerWidth / 2) +
      (cards[index].offsetWidth / 2);

    track.style.transform =
      `translateX(-${offset}px)`;

  }

  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

      currentIndex = index;

      updateCarousel(currentIndex);

    });

  });

  updateCarousel(currentIndex);

});