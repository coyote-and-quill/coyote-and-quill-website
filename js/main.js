/* ============================================================
   COYOTE & QUILL — MAIN JS
   Minimal. No dependencies. No build step.
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

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  /* --- ACTIVE NAV LINK --- */
  // Marks the current page's nav link as active
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  /* --- CONTACT FORM HANDLER --- */
  // Handles the contact form submit (update with your preferred form service)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const original = btn.textContent;

      // TODO: Replace this block with your form service (Formspree, Netlify Forms, etc.)
      btn.textContent = 'Message Sent';
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  /* --- SCROLL: NAV SHADOW ON SCROLL --- */
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
