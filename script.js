// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Re-evaluate the current href in case it was updated later (e.g., external links set up dynamically)
            const currentHref = this.getAttribute('href');

            // Only intercept the click if it is still an in-page anchor (starts with "#")
            if (currentHref && currentHref.startsWith('#')) {
                e.preventDefault();

                const targetId = currentHref.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Header background opacity on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const opacity = Math.min(scrolled / 100, 1);
        header.style.background = `rgba(11, 20, 38, ${0.95 + (opacity * 0.05)})`;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.problem-card, .feature-card, .process-step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Navigation URLs
    const links = {
        telegramBot: 'https://t.me/QuarkLedgerBot',   // Direct link to start using the Quark AI bot
        telegramGroup: 'https://t.me/LedgerEmoji', // Link to join the Telegram community/group
        discord: 'https://discord.gg/Gmsrdf3dyR',       // Discord server link
        gitbook: 'https://sshiftgpt.gitbook.io/sshift-quark',       // GitBook documentation link
        website1: 'https://ledgerapp.fun/',      // First additional webpage
        website2: 'https://sshiftgpt.com/'       // Second additional webpage
    };

    // Set up navigation links
    function setupNavigationLinks() {
        // Telegram Bot links (main CTA buttons) - Link to actual bot
        const telegramBotLinks = document.querySelectorAll('#get-started-btn, #main-cta-btn');
        telegramBotLinks.forEach(link => {
            link.href = links.telegramBot;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });

        // Telegram Group links (navigation)
        const telegramGroupLinks = document.querySelectorAll('#telegram-group-link, #footer-telegram-group');
        telegramGroupLinks.forEach(link => {
            link.href = links.telegramGroup;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });

        // Discord links
        const discordLinks = document.querySelectorAll('#discord-link, #footer-discord');
        discordLinks.forEach(link => {
            link.href = links.discord;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });

        // GitBook links
        const gitbookLinks = document.querySelectorAll('#gitbook-link, #footer-gitbook');
        gitbookLinks.forEach(link => {
            link.href = links.gitbook;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });

        // Additional website links
        const website1Link = document.getElementById('website1-link');
        if (website1Link) {
            website1Link.href = links.website1;
            website1Link.target = '_blank';
            website1Link.rel = 'noopener noreferrer';
        }

        const website2Link = document.getElementById('website2-link');
        if (website2Link) {
            website2Link.href = links.website2;
            website2Link.target = '_blank';
            website2Link.rel = 'noopener noreferrer';
        }
    }

    // Show message when link is not set
    function showLinkNotSetMessage(linkName) {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            z-index: 10000;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = `${linkName} link will be configured by the website owner.`;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }



    // Initialize navigation
    setupNavigationLinks();

    // Add hover effects to cards
    const cards = document.querySelectorAll('.problem-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Update links function (to be called when actual URLs are provided)
    window.updateNavigationLinks = function(newLinks) {
        Object.assign(links, newLinks);
        setupNavigationLinks();
        console.log('Navigation links updated:', links);
    };

    // Console message for developers
    console.log('🚀 Quark AI Website Loaded Successfully!');
    console.log('💡 Navigation links are configured and ready to use');
    console.log('🔗 All external links will open in new tabs');
});

