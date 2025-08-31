
(() => {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');

  if ('IntersectionObserver' in window && hero) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.05) {
            header.classList.remove('scrolled');
          } else {
            header.classList.add('scrolled');
          }
        });
      },
      { root: null, threshold: [0, 0.05, 1] }
    );
    io.observe(hero);
  } else {
    const onScroll = () =>
      window.scrollY > 24 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  const toggle = document.getElementById('nav-toggle');
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (toggle && toggle.checked) toggle.checked = false;
    });
  });
})();
