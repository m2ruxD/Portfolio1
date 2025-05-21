function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all the fields.");
    return false;
  }

  alert("Thank you for your message, " + name + "!");
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".learn-more-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const title = button.getAttribute("data-title");
      const description = button.getAttribute("data-description");

      document.getElementById("projectModalTitle").textContent = title;
      document.getElementById("projectModalDescription").textContent = description;
      document.getElementById("projectModal").style.display = "flex";
    });
  });
});

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeProjectModal();
  }
});