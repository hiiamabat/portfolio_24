const navbarEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbarEl.classList.add("navbar-scrolled");
  } else {
    navbarEl.classList.remove("navbar-scrolled");
  }
});

const emailText = document.querySelector("#email-text");
const copyEmailButton = document.querySelector(".copy-email");

copyEmailButton.addEventListener("click", () => {
  const text = emailText.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Email copied to clipboard');
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
});