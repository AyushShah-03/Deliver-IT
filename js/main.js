/* =========== Show Navbar =========== */

// Show Navbar: This section selects a navbar element and a hamburger element from the HTML document. It adds a click event listener to the hamburger element, and when it is clicked, it toggles the "show" class on the navbar element.

const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

/* =========== Scroll Position =========== */
// Scroll Position: This section selects a header element and all navbar links (except for the last one) from the HTML document.

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

/* =========== Smooth Scroll =========== */

// Smooth Scroll: This section adds a click event listener to each of the navbar links. When a link is clicked, it prevents the default link behavior, gets the ID of the element that the link is pointing to, and scrolls smoothly to that element's position on the page. It also removes the "show" class from the navbar element.

  Array.from(scrollLink).map((link) => {
    link.addEventListener("click", (e) => {
      // Prevent Default
      e.preventDefault();

      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      let position = element.offsetTop - 90;

      window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth",
      });
      navbar.classList.remove("show");
    });
  });

/* =========== Preloader =========== */

// Preloader: This section selects a preloader element from the HTML document. When the page finishes loading, it waits for 2 seconds and then sets the preloader's display to "none".

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

/* =========== Scroll Top =========== */

// Scroll Top: This section selects a scroll-top element from the HTML document. It adds a click event listener to the element, and when it is clicked, it scrolls smoothly to the top of the page.

// const scrollTop = document.querySelector(".scroll-top");

// scrollTop.addEventListener("click", () => {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// });

// Window Scroll: This section adds a scroll event listener to the window. When the user scrolls down more than 300 pixels, it adds the "show" class to the scroll-top element to make it visible. When the user scrolls back up to less than 300 pixels, it removes the "show" class from the scroll-top element to hide it.

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});
