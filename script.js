// Pega aquí las URLs exactas de tus cuentas cuando las tengas.
const SOCIAL_URLS = {
  facebook: "",
  marketplace: "",
  instagram: "",
  youtube: "",
  linkedin: "",
  tiktok: ""
};

document.querySelectorAll('[data-social]').forEach(link => {
  const key = link.dataset.social;
  const url = SOCIAL_URLS[key];
  if (url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener';
  } else {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Falta configurar la URL de ' + link.textContent + '. Envíame el enlace exacto y lo incorporamos.');
    });
  }
});

const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));
