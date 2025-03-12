document.addEventListener("DOMContentLoaded", function () {
  const openFormBtn = document.getElementById("openFormBtn");
  const closeFormBtn = document.getElementById("closeFormBtn");
  const slideForm = document.getElementById("slideForm");

  if (!openFormBtn || !closeFormBtn || !slideForm) {
    console.error("One or more contact form elements are missing!");
    return;
  }

  // Open the form when clicking the button
  openFormBtn.addEventListener("click", function () {
    slideForm.classList.add("active");
  });

  // Close the form when clicking the close button
  closeFormBtn.addEventListener("click", function () {
    slideForm.classList.remove("active");
  });

  // Close the form when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!slideForm.contains(event.target) && event.target !== openFormBtn) {
      slideForm.classList.remove("active");
    }
  });
});
