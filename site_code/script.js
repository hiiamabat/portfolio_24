const navbarEl = document.querySelector(".navbar");

window: addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbarEl.classList.add(".navbar-scrolled");
  } else if (window.scrollY <= 50) {
    navbarEl.classList.remove(".navbar-scrolled");
  }
});

let emailText = document.querySelector("#email-text");

let handleCopyClick = document.querySelector(".copy-email");

handleCopyClick.addEventListener("click", () => {
  let text = emailText.textContent;
  navigator.clipboard.writeText("hiiamabat@gmail.com");

  alert(`email copied to clipboard`);
});
