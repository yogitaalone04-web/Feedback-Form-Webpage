const formData = {
  name: form.name.value.trim(),
  email: form.email.value.trim(),
  message: form.message.value.trim(),
  rating: form.rating.value
};

fetch("https://script.google.com/macros/s/AKfycbyQoRt6xsZmMwr1__DEEk626hh1TV2yQNE5WGhsJ56EVAetwufPxiUl9SUmIJQ_YX7TZw/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
})
.then(response => response.json())
.then(result => {
  if(result.result === "success") {
    feedbackForm.style.display = 'none';
    successMessage.style.display = 'block';
    form.reset();
  } else {
    alert(result.msg || "Something went wrong!");
  }
})
.catch(error => console.error("Error:", error));
