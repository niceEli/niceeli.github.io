// When the "Get Started" button is clicked, scroll to the main content
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const main = document.querySelector("main");
  main.scrollIntoView({ behavior: "smooth" });
});

// When the user scrolls down, hide the navigation bar
let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
});
