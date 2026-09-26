/* ============================================
   SUMAN OS — Interactions
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initScrollReveal();
  initProgressBars();
  initParallaxGlow();
});

function initIcons() {
  const tryCreate = () => {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
      return true;
    }
    return false;
  };
  if (!tryCreate()) {
    // Lucide script may still be loading (defer)
    let attempts = 0;
    const id = setInterval(() => {
      attempts += 1;
      if (tryCreate() || attempts > 20) clearInterval(id);
    }, 50);
  }
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    // Swap icon
    const icon = toggle.querySelector("[data-lucide]");
    if (icon && typeof lucide !== "undefined") {
      icon.setAttribute("data-lucide", open ? "x" : "menu");
      lucide.createIcons();
    }
  });

  // Close on link click
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-label", "Open menu");
      const icon = toggle.querySelector("[data-lucide]");
      if (icon && typeof lucide !== "undefined") {
        icon.setAttribute("data-lucide", "menu");
        lucide.createIcons();
      }
    });
  });
}

/* ---------- Smooth scroll (offset for sticky nav) ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ---------- Active nav on scroll ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link");

  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".section-header, .about-layout, .timeline-item, .skill-panel, .project-card, .commit-window, .process-list, .fs-item, .roadmap-window, .contact-card, .info-card, .terminal-window"
  );

  targets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---------- Animate progress bars when in view ---------- */
function initProgressBars() {
  const bars = document.querySelectorAll(".skill-bar, .process-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

/* ---------- Subtle glow follow (desktop) ---------- */
function initParallaxGlow() {
  const glow = document.querySelector(".bg-glow-1");
  if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let raf = null;
  window.addEventListener("mousemove", (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glow.style.transform = `translate(${x}px, ${y}px)`;
      raf = null;
    });
  });
}
