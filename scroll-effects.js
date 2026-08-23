(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const root = document.documentElement;
  root.classList.add('motion-ready');

  const splitWords = (element) => {
    if (!element || element.dataset.splitReady) return;
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    let count = 0;
    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      node.nodeValue.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { fragment.append(document.createTextNode(part)); return; }
        const word = document.createElement('span');
        word.className = 'word';
        word.style.setProperty('--word-delay', `${count * 42}ms`);
        word.textContent = part;
        fragment.append(word);
        count += 1;
      });
      node.parentNode.replaceChild(fragment, node);
    });
    element.dataset.splitReady = 'true';
  };

  const queue = [];
  const register = (selector, effect, options = {}) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (element.dataset.reveal) return;
      element.dataset.reveal = effect;
      element.style.setProperty('--reveal-delay', `${(options.stagger || 0) * index}ms`);
      queue.push(element);
    });
  };

  document.querySelectorAll('h1, .about h2, .heading-row h2, .why h2, .cta h2, .faq-copy h2, .contact-info h2').forEach(splitWords);
  document.querySelectorAll('.about h2, .heading-row h2, .why h2, .cta h2, .faq-copy h2, .contact-info h2').forEach((heading) => {
    heading.dataset.reveal = 'heading';
    queue.push(heading);
  });

  register('.about-art, .why-images, .faq-art', 'image-reveal');
  register('.about-copy > p, .why-copy > p, .faq-copy > p, .contact-info > div > p:not(.kicker)', 'rise', { stagger: 70 });
  register('.service-card', 'rise', { stagger: 90 });
  register('.work-card', 'scale-in', { stagger: 90 });
  register('.benefits article', 'rise', { stagger: 110 });
  register('.process-grid article', 'rise', { stagger: 85 });
  register('.note-grid article', 'rise', { stagger: 100 });
  register('.form', 'from-right');
  register('.contact-info', 'from-left');
  register('.about-actions, .center', 'rise');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
  queue.forEach((element) => revealObserver.observe(element));

  const hero = document.querySelector('.hero-content');
  if (hero) requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('is-visible')));

  const parallaxElements = [
    [document.querySelector('.hero-bg'), 0.10],
    [document.querySelector('.cta-inner > img'), 0.045],
    ...Array.from(document.querySelectorAll('.why-images img')).map((item, index) => [item, 0.025 + index * 0.006]),
  ].filter(([element]) => element);
  parallaxElements.forEach(([element]) => element.dataset.parallax = 'true');
  let queuedFrame = false;
  const updateParallax = () => {
    queuedFrame = false;
    const viewHeight = window.innerHeight;
    parallaxElements.forEach(([element, intensity]) => {
      const rect = element.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      const distance = (midpoint - viewHeight / 2) / viewHeight;
      element.style.setProperty('--parallax-y', `${Math.max(-24, Math.min(24, distance * -160 * intensity))}px`);
    });
  };
  const queueParallax = () => { if (!queuedFrame) { queuedFrame = true; requestAnimationFrame(updateParallax); } };
  window.addEventListener('scroll', queueParallax, { passive: true });
  window.addEventListener('resize', queueParallax, { passive: true });
  queueParallax();
})();
