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
	card.addEventListener("click", () => {
		container.classList.toggle("active-container");
		card.classList.toggle("active");
	});
});
