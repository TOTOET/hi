document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.cv-page');

  function switchPage(targetId) {
    buttons.forEach((button) => {
      button.classList.toggle('active', button.dataset.target === targetId);
    });
    pages.forEach((page) => {
      page.classList.toggle('active', page.id === targetId);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => switchPage(button.dataset.target));
  });
});
