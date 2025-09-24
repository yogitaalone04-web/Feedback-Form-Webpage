const form = document.getElementById('feedbackForm');
const confirmation = document.getElementById('confirmation');

// Validate inputs live
form.querySelectorAll("input[required], textarea[required]").forEach(el => {
  el.addEventListener("input", () => {
    if (!el.value.trim()) {
      el.style.borderColor = "red";
    } else {
      el.style.borderColor = "#667eea";
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Hide form, show confirmation
  form.classList.add("hidden");
  confirmation.classList.remove("hidden");

  // Reset form fields
  form.reset();

  // Auto reset view after 4s
  setTimeout(() => {
    confirmation.classList.add("hidden");
    form.classList.remove("hidden");
  }, 4000);
});
