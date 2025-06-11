// Main JavaScript for Nextt website
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNavigation.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link (mobile)
    const navLinks = document.querySelectorAll('.main-navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            mainNavigation.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add class to header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialize testimonials slider if exists and Slick is loaded
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider && typeof $.fn.slick !== 'undefined') {
        $('.testimonials-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            adaptiveHeight: true
        });
    }

    // Initialize portfolio filters if exists and Isotope is loaded
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolioFilters = document.querySelectorAll('.portfolio-filter');
    
    if (portfolioGrid && typeof Isotope !== 'undefined') {
        // Initialize Isotope
        const iso = new Isotope(portfolioGrid, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        
        // Filter items on button click
        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                // Remove active class from all filters
                portfolioFilters.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to current filter
                this.classList.add('active');
                
                // Filter items
                iso.arrange({
                    filter: filterValue === '*' ? null : filterValue
                });
            });
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Validate name
            if (!name.value.trim()) {
                name.classList.add('error');
                valid = false;
            } else {
                name.classList.remove('error');
            }
            
            // Validate email
            if (!email.value.trim() || !isValidEmail(email.value)) {
                email.classList.add('error');
                valid = false;
            } else {
                email.classList.remove('error');
            }
            
            // Validate message
            if (!message.value.trim()) {
                message.classList.add('error');
                valid = false;
            } else {
                message.classList.remove('error');
            }
            
            if (valid) {
                // Here would be the actual form submission
                // For now, just show a success message
                alert('Mensagem enviada com sucesso! (Simulação)');
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            }
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item h3');
    if (faqItems) {
        faqItems.forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        });
    }

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (position < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }

    // Run animation check on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});
