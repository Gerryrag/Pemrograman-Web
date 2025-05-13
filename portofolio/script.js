document.querySelector(".navbar-toggle").addEventListener("click", function () {
  document.querySelector(".navbar-menu").classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    console.log("Navbar changed to scrolled state");
  } else {
    navbar.classList.remove("scrolled");
    console.log("Navbar returned to normal state");
  }
});

document.querySelectorAll(".navbar-link, .cta-button").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      window.scrollTo({
        top: target.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  });
});
