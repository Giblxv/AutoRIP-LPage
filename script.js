const whatsappNumber = '5511953336229';
const messages = {
  demo: 'Olá! Quero conhecer o AutoRIP e agendar uma demonstração para minha operação DTF/DTF UV.',
  buy: 'Olá! Tenho interesse em comprar o AutoRIP. Quero conversar sobre minha operação e os próximos passos.'
};

function whatsappUrl(kind = 'demo') {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages[kind] || messages.demo)}`;
}

document.querySelectorAll('[data-wa]').forEach((link) => {
  link.href = whatsappUrl(link.dataset.wa);
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
function setMenu(open, returnFocus = false) {
  if (!nav || !menuToggle) return;
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.querySelector('span').textContent = open ? '−' : '+';
  if (open) nav.querySelector('a')?.focus();
  else if (returnFocus) menuToggle.focus();
}
menuToggle?.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  setMenu(open);
  if (!open) menuToggle.focus();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) setMenu(false, true);
});
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  setMenu(false);
}));

document.querySelector('.final-cta small').textContent = `11 95333-6229 · atendimento comercial · ${new Date().getFullYear()}`;
