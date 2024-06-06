window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      return;
    }

    entry.target.classList.remove('appear');
  });
});

const squares = document.querySelectorAll('.appear-at-scroll');

squares.forEach((element) => observer.observe(element));

function ScrollToElement(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
  });

  CloseMenu();
}

function ToggleOpenMenu() {
  document.getElementById('menu').classList.toggle('open');
  document.getElementById('introduction-header').classList.toggle('open');
}

function CloseMenu() {
  document.getElementById('menu').classList.remove('open');
  document.getElementById('introduction-header').classList.remove('open');
}