const container = document.querySelector(".container");
const cards = container.querySelectorAll(".card");

// horizontal Scrolling
container.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    // Scroll right
    container.scrollLeft += 300; // Adjust the scroll amount as needed
  } else {
    // Scroll left
    container.scrollLeft -= 300; // Adjust the scroll amount as needed
  }

  // Prevent the default behavior of the mouse wheel
  e.preventDefault();
});

cards.forEach((card) => {
  const close_btn = card.querySelector(".fa-xmark");
	const prof_pic = card.querySelector('.prof-pic')

  prof_pic.addEventListener("click", () => {
    container.classList.add("active-container");
	  card.classList.add("active");
  });

  close_btn.addEventListener("click", () => {
    container.classList.remove("active-container");
    card.classList.remove("active");
  });
});
