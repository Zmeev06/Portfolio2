const btn = document.querySelector(".header__btn");
const form = document.querySelector(".contacts");
const about = document.querySelector(".about");

btn.addEventListener("click", () => {
  form.scrollIntoView({
    behavior: "smooth",
  });
});

const list = document.querySelector(".nav-bar");

list.addEventListener("click", (e) => {
  let targ = e.target;
  console.log(targ.className);
  switch (targ.className) {
    case "nav__main":
      document.querySelector(".header").scrollIntoView({ behavior: "smooth" });

      break;
    case "nav__about":
      // document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
      about.scrollIntoView({ behavior: "smooth" });

      break;
    case "nav__works":
      document.querySelector(".works").scrollIntoView({ behavior: "smooth" });

      break;
    case "nav__process":
      document.querySelector(".process").scrollIntoView({ behavior: "smooth" });

      break;
    case "nav__contacts":
      document
        .querySelector(".contacts")
        .scrollIntoView({ behavior: "smooth" });

      break;
  }
});
