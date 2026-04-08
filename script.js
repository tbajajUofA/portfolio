// Smooth scroll effect for anchor links
const navLinks = document.querySelectorAll("nav ul li a");

for (const link of navLinks) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop - 80;
  window.scroll({
    top: targetPosition,
    behavior: "smooth"
  });
}

// Form submission with AJAX
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", this.getAttribute("action"));
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Thank you for your message!");
    }
  };
  xhr.send(new URLSearchParams(formData).toString());
});
