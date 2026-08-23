(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
    menuButton.textContent = open ? '×' : '☰';
  });
  document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  }));
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
