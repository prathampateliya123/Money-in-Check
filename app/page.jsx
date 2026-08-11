'use client';

import { useEffect } from 'react';

/** Scroll-to-top button (extra UX on the xerox clone) */
export default function Page() {
  useEffect(() => {
    if (document.getElementById('scrollTopBtn')) return;

    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.title = 'Back to top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 13V3M3 8l5-5 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      background: '#1a1a1a',
      color: '#e9e9e9',
      border: '1.5px solid rgba(233,233,233,0.2)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0',
      visibility: 'hidden',
      transform: 'translateY(10px)',
      transition:
        'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease, background 0.2s ease',
      zIndex: '9999',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    });
    document.body.appendChild(btn);

    const onScroll = () => {
      const show = window.scrollY > 400;
      btn.style.opacity = show ? '1' : '0';
      btn.style.visibility = show ? 'visible' : 'hidden';
      btn.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('mouseenter', () => {
      btn.style.background = '#2e7d52';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = '#1a1a1a';
    });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      btn.remove();
    };
  }, []);

  return null;
}
