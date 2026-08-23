(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  const menuBackdrop = document.querySelector('.menu-backdrop');
  const closeMenu = () => {
    nav?.classList.remove('open');
    menuButton?.classList.remove('is-open');
    menuBackdrop?.classList.remove('is-active');
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'فتح القائمة');
  };
  const toggleMenu = () => {
    const isOpen = nav?.classList.toggle('open');
    menuButton?.classList.toggle('is-open', isOpen);
    menuBackdrop?.classList.toggle('is-active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    menuButton?.setAttribute('aria-expanded', String(isOpen));
    menuButton?.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  };
  menuButton?.addEventListener('click', toggleMenu);
  menuBackdrop?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', closeMenu));
  document.querySelectorAll('.accordion article').forEach((item) => {
    item.querySelector('button')?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('open');
      document.querySelectorAll('.accordion article').forEach((other) => other.classList.remove('open'));
      if (willOpen) item.classList.add('open');
    });
  });
  document.querySelector('.form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'مرحبًا، أرغب في طلب خدمة من خدمات الترميم والهدم بالرياض.',
      `الاسم: ${data.get('name') || '-'}`,
      `رقم الجوال: ${data.get('phone') || '-'}`,
      `نوع الخدمة: ${data.get('service') || '-'}`,
      `الحي أو الموقع: ${data.get('location') || '-'}`,
      `تفاصيل الطلب: ${data.get('message') || '-'}`,
    ].join('\n');
    window.open(`https://wa.me/966502833163?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
})();
