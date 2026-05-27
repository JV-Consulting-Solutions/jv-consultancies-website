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

    if(window.innerWidth > 900){

      const offset =
        cards[index].offsetLeft -
        (window.innerWidth / 2) +
        (cards[index].offsetWidth / 2);

      track.style.transform =
        `translateX(-${offset}px)`;

    }

  }

  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

      currentIndex = index;

      updateCarousel(currentIndex);

      if(window.innerWidth <= 900){

        cards[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });

      }

    });

  });


  if(window.innerWidth <= 900){

    track.addEventListener("scroll", () => {

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {

        const cardCenter =
          card.offsetLeft + (card.offsetWidth / 2);

        const viewportCenter =
          track.scrollLeft + (track.offsetWidth / 2);

        const distance =
          Math.abs(cardCenter - viewportCenter);

        if(distance < closestDistance){
          closestDistance = distance;
          closestIndex = index;
        }

      });

      if(currentIndex !== closestIndex){

        currentIndex = closestIndex;

        updateCarousel(currentIndex);

      }

    });

  }

  updateCarousel(currentIndex);

});