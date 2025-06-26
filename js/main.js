// Main JavaScript for Nextt website
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNavigation = document.querySelector(".main-navigation");

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      mainNavigation.classList.toggle("active");
    });
  }

  // Close menu when clicking on a link (mobile)
  const navLinks = document.querySelectorAll(".main-navigation a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuToggle.classList.remove("active");
      mainNavigation.classList.remove("active");
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Add class to header on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".site-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Initialize testimonials slider if exists and Slick is loaded
  const testimonialsSlider = document.querySelector(".testimonials-slider");
  if (testimonialsSlider && typeof $.fn.slick !== "undefined") {
    $(".testimonials-slider").slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
    });
  }

  // Initialize portfolio filters if exists and Isotope is loaded
  const portfolioGrid = document.querySelector(".portfolio-grid");
  const portfolioFilters = document.querySelectorAll(".portfolio-filter");

  if (portfolioGrid && typeof Isotope !== "undefined") {
    // Initialize Isotope
    const iso = new Isotope(portfolioGrid, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    // Filter items on button click
    portfolioFilters.forEach((filter) => {
      filter.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");

        // Remove active class from all filters
        portfolioFilters.forEach((btn) => {
          btn.classList.remove("active");
        });

        // Add active class to current filter
        this.classList.add("active");

        // Filter items
        iso.arrange({
          filter: filterValue === "*" ? null : filterValue,
        });
      });
    });
  }

  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Validate name
      if (!name.value.trim()) {
        name.classList.add("error");
        valid = false;
      } else {
        name.classList.remove("error");
      }

      // Validate email
      if (!email.value.trim() || !isValidEmail(email.value)) {
        email.classList.add("error");
        valid = false;
      } else {
        email.classList.remove("error");
      }

      // Validate message
      if (!message.value.trim()) {
        message.classList.add("error");
        valid = false;
      } else {
        message.classList.remove("error");
      }

      if (valid) {
        // Here would be the actual form submission
        // For now, just show a success message
        alert("Mensagem enviada com sucesso! (Simulação)");
        contactForm.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      }
    });
  }

  // Email validation function
  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item h3");
  if (faqItems) {
    faqItems.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  }

  // Animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        element.classList.add("animated");
      }
    });
  }

  // Run animation check on load and scroll
  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("load", animateOnScroll);
});
// --------- Função de visibilidade do header ---------------
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const header = document.getElementById("mainNav");
  const heroSection = document.getElementById("hero");
  const sobreSection = document.getElementById("sobre");

  function toggleHeader() {
  
    const sobreTop = sobreSection.getBoundingClientRect().top;
    const mainTop = main.getBoundingClientRect().top;

  
    const relativeSobreTop = sobreTop - mainTop;

  
    if (relativeSobreTop > 0) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
  }


  toggleHeader();


  main.addEventListener("scroll", toggleHeader);
});


// SCROLL DA PAGINA -------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const header = document.getElementById("mainNav");
  const firstSection = document.querySelector(".page.hero-section");

  function toggleNavbar() {
    const scrollTop = main.scrollTop;
    if (firstSection) {
      const limit = firstSection.offsetHeight / 2;
      if (scrollTop < limit) {
        header.classList.remove("hidden");
      } else {
        header.classList.add("hidden");
      }
    } else {
      header.classList.remove("hidden");
    }
  }

  toggleNavbar();
  main.addEventListener("scroll", toggleNavbar);

  const observerOptions = {
    root: main,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("_visible");
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(".page");
  sections.forEach((section) => observer.observe(section));


  const isDesktop = !/Mobi|Android/i.test(navigator.userAgent);

  if (isDesktop) {
    let isScrolling = false;

    main.addEventListener('wheel', (e) => {
      e.preventDefault();

      if (isScrolling) return; 
      isScrolling = true;

      const delta = e.deltaY;

    
      const getRelativeTop = (element) => {
        return element.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop;
      };

      if (delta > 0) {
      
        const next = [...sections].find(section => getRelativeTop(section) > main.scrollTop + 10);
        if (next) {
          next.scrollIntoView({behavior: 'smooth'});
        } else {
          isScrolling = false;
        }
      } else {
        
        const prevSections = [...sections].filter(section => getRelativeTop(section) < main.scrollTop - 10);
        if (prevSections.length) {
          const prev = prevSections[prevSections.length - 1];
          prev.scrollIntoView({behavior: 'smooth'});
        } else {
          isScrolling = false; 
        }
      }

   
      setTimeout(() => {
        isScrolling = false;
      }, 700);
    }, {passive: false});
  }
});
// COUNTER DO STAST -------------------------------------------- //
const counters = document.querySelectorAll('.count-up');
  let hasCounted = false;

  const animateCount = (el, target) => {
    let start = 0;
    const duration = 9000; 
    const increment = Math.ceil(target / (duration / 16)); // ~60fps

    const updateCount = () => {
      start += increment;
      if (start >= target) {
        el.textContent = target;
      } else {
        el.textContent = start;
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        hasCounted = true;

        counters.forEach(counter => {
          const span = counter.querySelector('span');
          const target = parseInt(counter.dataset.target, 10);
          animateCount(span, target);
        });

        observer.disconnect(); 
      }
    });
  }, {
    threshold: 0.6
  });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }


