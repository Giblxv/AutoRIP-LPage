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
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.querySelector('span').textContent = open ? '−' : '+';
});

document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  const indicator = menuToggle?.querySelector('span');
  if (indicator) indicator.textContent = '+';
}));

document.querySelector('.final-cta small').textContent = `11 95333-6229 · atendimento comercial · ${new Date().getFullYear()}`;
