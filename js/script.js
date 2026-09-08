// Industrial Portfolio — Interface Animations

const elementsToReveal = document.querySelectorAll(
  ".section-heading, .projects-intro, .project-industrial, " +
  ".stack-intro, .pipeline, .industrial-knowledge, " +
  ".about-main, .about-system, " +
  ".contact-main, .connection-terminal"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.12
  }
);

elementsToReveal.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});