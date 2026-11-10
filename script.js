const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.querySelector('span').textContent = expanded ? '＋' : '−';
  nav.classList.toggle('open', !expanded);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.querySelector('span').textContent = '＋';
}));

document.querySelector('#year').textContent = new Date().getFullYear();
