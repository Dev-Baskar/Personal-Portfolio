function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');
    menu.classList.toggle('show');
    toggle.classList.toggle('open');
  }


  

  gsap.registerPlugin(ScrollTrigger);

  const sections = ["#about", "#skills", "#projects", "#contact"];
  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  gsap.utils.toArray(".tech-item").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.out",
    });
  });


  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reset",
      },
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  });

