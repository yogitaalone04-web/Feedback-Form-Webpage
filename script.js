const form = document.getElementById('form');
const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // stop normal form submit

  // ✅ Turant success message dikhado
  feedbackForm.style.display = 'none';
  successMessage.style.display = 'block';

  const formData = new FormData(form);

  // Backend ko data bhejna background me chalta rahega
  fetch("https://script.google.com/macros/s/AKfycby1K9xmfKgTXuTzCa0A7C2AuMLskIVTGA5DMmwybwuJYaxEqysgivXg88CBHOOuTerc/exec", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      alert("⚠️ Data save nahi hua, but form submitted locally!");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
