document.addEventListener("DOMContentLoaded", function () {
  const ratingButtons = document.querySelectorAll(".rating-btn");
  const submitButton = document.querySelector(".submit-btn");
  const ratingState = document.querySelector(".rating-state");
  const thankYouState = document.querySelector(".thank-you-state");
  const ratingValue = document.getElementById("rating-value");

  let selectedRating = 0;

  ratingButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      ratingButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Store selected rating
      selectedRating = this.value;
    });
  });

  submitButton.addEventListener("click", function () {
    if (selectedRating > 0) {
      // Update rating value in thank you state
      ratingValue.textContent = selectedRating;

      // Switch states
      ratingState.style.display = "none";
      thankYouState.style.display = "flex";
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
