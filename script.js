function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');
    menu.classList.toggle('show');
    toggle.classList.toggle('open');
  }


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = null;
  let scrollPos = window.pageYOffset + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const statusMsg = document.getElementById("submitStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    submitBtn.classList.add("loading");
    submitBtn.innerText = "Sending...";

    emailjs.sendForm("service_m9yn5zq", "template_vxpeqjj", form)
      .then(() => {
        submitBtn.classList.remove("loading");
        submitBtn.innerHTML = `Submit <img src="./src/Icons/paper-plane-solid.svg" alt="Send" />`;
        statusMsg.textContent = "👍 Message Sent!";
        form.reset();

        setTimeout(() => {
          statusMsg.textContent = "";
        }, 4000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        submitBtn.classList.remove("loading");
        submitBtn.innerHTML = `Submit <img src="./src/Icons/paper-plane-solid.svg" alt="Send" />`;
        statusMsg.textContent = "❌ Failed to send!";
      });
  });
});
