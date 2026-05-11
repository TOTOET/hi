function switchPage(pageId) {
  const pages = document.querySelectorAll('.cv-page');
  pages.forEach(page => page.classList.remove('active'));

  const buttons = document.querySelectorAll('.nav-item');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(pageId).classList.add('active');

  const clickedBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(pageId));
  if(clickedBtn) {
    clickedBtn.classList.add('active');
  }
}
