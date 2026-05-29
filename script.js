
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    }));
  }

  const backTop = document.querySelector('.back-top');
  if(backTop){
    window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500), {passive:true});
    backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); } });
    }, {threshold:.12});
    revealEls.forEach(el => obs.observe(el));
  } else { revealEls.forEach(el => el.classList.add('visible')); }

  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      if(status){ status.textContent = 'Thank you. This demo form is ready for backend/email connection before launch.'; status.classList.add('show'); }
      form.reset();
    });
  });

  document.querySelectorAll('[data-print-card]').forEach(btn => btn.addEventListener('click', () => window.print()));
})();
