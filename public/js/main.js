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

  /* --- CONTACT FORM HANDLER (Formspree, progressive enhancement) --- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const status = document.getElementById('form-status');
    const MAILTO = 'hello@coyoteandquill.com';

    function setStatus(message, kind) {
      if (!status) return;
      status.textContent = message;
      status.className = 'form-status' + (kind ? ' ' + kind : '');
    }

    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const original = btn.textContent;
      setStatus('', '');
      btn.disabled = true;
      btn.textContent = 'Sending…';

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          contactForm.reset();
          btn.textContent = 'Message Sent';
          setStatus('Thanks — your message is in. We read every one and will reply if there’s a fit.', 'success');
          setTimeout(function () {
            btn.textContent = original;
            btn.disabled = false;
          }, 4000);
        } else {
          let msg = 'Something went wrong. Please try again, or email ' + MAILTO + '.';
          try {
            const data = await res.json();
            if (data && Array.isArray(data.errors) && data.errors.length) {
              msg = data.errors.map(function (x) { return x.message; }).join(' ');
            }
          } catch (_) { /* keep fallback message */ }
          setStatus(msg, 'error');
          btn.textContent = original;
          btn.disabled = false;
        }
      } catch (_) {
        setStatus('Network error — please try again, or email ' + MAILTO + '.', 'error');
        btn.textContent = original;
        btn.disabled = false;
      }
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
