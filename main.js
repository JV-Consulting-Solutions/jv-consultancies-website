/* ============================================================
   JV CONSULTANCIES — assets/js/main.js
   GitHub Pages compatible — no build tools required
   ============================================================ */

(function () {
  'use strict';

  /* ── Dynamic copyright year ──────────────────────────────── */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── Navigation: scroll shrink ───────────────────────────── */
  var nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('nav--scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── Navigation: hamburger mobile menu ───────────────────── */
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close mobile menu when a link is tapped */
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Intersection Observer: scroll-triggered animations ──── */
  var animatables = document.querySelectorAll(
    '.card, .why__item, .animate-in'
  );

  if ('IntersectionObserver' in window && animatables.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            /* Respect stagger delay set via data-delay attribute */
            var delay = entry.target.dataset.delay || 0;
            setTimeout(function () {
              entry.target.classList.add('visible');
            }, Number(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    animatables.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback: show all immediately if IntersectionObserver unsupported */
    animatables.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Contact form: client-side feedback ──────────────────── */
  var form        = document.getElementById('contactForm');
  var successMsg  = document.getElementById('formSuccess');

  if (form && successMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Basic HTML5 validation check */
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      /* Show success message */
      successMsg.style.opacity = '1';
      form.reset();

      /* Hide after 4 seconds */
      setTimeout(function () {
        successMsg.style.opacity = '0';
      }, 4000);
    });
  }

  /* ── Smooth scroll polyfill for older browsers ───────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        /* Update URL hash without jumping */
        if (history.pushState) {
          history.pushState(null, null, '#' + targetId);
        }
      }
    });
  });

})();
