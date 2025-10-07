const form = document.getElementById('form');
const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // stop normal form submit

  // ✅ Turant success message dikhado
  feedbackForm.style.display = 'none';
  successMessage.style.display = 'block';

  const formData = new FormData(form);

  // Debug ke liye console me rating print karna (optional)
  console.log("Rating submitted:", formData.get("rating"));

  // Backend ko data bhejna
  fetch("https://script.google.com/macros/s/AKfycbyfMh9BI7b6rhBeIFTN05d4pGPaEklhFAccgePmy64uIzRIFcX40aWesU8SuJ15icXO/exec ", {
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
