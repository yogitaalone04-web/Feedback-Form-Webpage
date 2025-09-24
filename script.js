document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    confirmation.classList.remove("hidden");
  });
});
