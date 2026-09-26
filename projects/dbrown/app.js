const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
document.addEventListener('keydown', e => {if(e.key === 'Escape' && nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
const form = document.querySelector('#inquiry');
if(form){
 const service = new URLSearchParams(location.search).get('service');
 if(service !== null && /^\d$/.test(service) && Number(service)<6) document.querySelector('#service').selectedIndex = Number(service)+1;
 form.addEventListener('submit', e => {
 e.preventDefault();
 if(!form.reportValidity())return;
 const fields = [...new FormData(form)].map(([key,val]) => `${key}: ${String(val).trim()}`).join('\n\n');
 const blob = new Blob(['D.BROWN GLOBAL FREELANCE LTD\nENQUIRY DRAFT — NOT SENT\n\n'+fields],{type:'text/plain;charset=utf-8'});
 const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url;a.download='dbrown-enquiry-draft.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.querySelector('#form-status').textContent='Your enquiry draft is ready to download. Email it to dannyoladimeji450@gmail.com or call 08163872165.';
 });
}

/* Desktop cursor follower: decorative, non-blocking, and motion-aware. */
(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.setAttribute('aria-hidden', 'true');
  document.body.append(ring);
  let x = 0, y = 0, currentX = 0, currentY = 0, frame = null, active = false;
  const enabled = () => pointer.matches && !motion.matches;
  function stop() {
    active = false;
    ring.classList.remove('visible', 'hovering');
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
  }
  function draw() {
    currentX += (x - currentX) * 0.19;
    currentY += (y - currentY) * 0.19;
    ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    if (active && (Math.abs(x-currentX) > 0.1 || Math.abs(y-currentY) > 0.1)) {
      frame = requestAnimationFrame(draw);
    } else { frame = null; }
  }
  document.addEventListener('pointermove', event => {
    if (!enabled() || event.pointerType !== 'mouse') { stop(); return; }
    x = event.clientX;
    y = event.clientY;
    if (!active) { currentX = x; currentY = y; active = true; }
    ring.classList.add('visible');
    ring.classList.toggle('hovering', !!event.target.closest('a, button, summary, input, select, textarea'));
    if (frame === null) frame = requestAnimationFrame(draw);
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', stop);
  window.addEventListener('blur', stop);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  pointer.addEventListener('change', stop);
  motion.addEventListener('change', stop);

  /* Scroll progress and progressive reveals; content is visible without JS. */
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  let scrolling = false;
  function updateProgress() {
    const total = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${total > 0 ? Math.min(1, Math.max(0, scrollY / total)) : 0})`;
    scrolling = false;
  }
  addEventListener('scroll', () => {
    if (!scrolling) { scrolling = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  addEventListener('resize', updateProgress);
  updateProgress();
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (!motion.matches) entry.target.classList.add('reveal-enter');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-head, .service-card, .values article, .project-card, .service-detail, .cta').forEach(el => observer.observe(el));
  }
})();
