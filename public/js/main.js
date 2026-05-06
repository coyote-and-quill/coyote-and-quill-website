/* ============================================================
   COYOTE & QUILL — MAIN JS
   Minimal. No dependencies. Loaded via /js/main.js in BaseLayout.
   ============================================================ */

(function () {
  'use strict';

  /* --- MOBILE NAV TOGGLE --- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  /* --- ACTIVE NAV LINK --- */
  // Normalize trailing slashes; treat empty path as "/" so the home link matches.
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const linkPath = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  /* --- CONTACT FORM HANDLER --- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const original = btn.textContent;

      // TODO: Replace with form service (Formspree, Vercel Functions, etc.)
      btn.textContent = 'Message Sent';
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  /* --- NAV SHADOW ON SCROLL --- */
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 16) {
        nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.4)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

})();
