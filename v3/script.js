const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('open');
    });
  });
}
