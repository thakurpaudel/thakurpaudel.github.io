document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage ||
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === '/' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    setActiveNavLink();

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    alert("Thank you! Your message has been sent.");
                    contactForm.reset();
                } else {
                    alert("Oops! Something went wrong. Please try again.");
                }
            } catch (error) {
                alert("Network error. Please check your connection.");
            }
        });
    }

    async function fetchGitHubActivity() {
        const githubContainer = document.getElementById('github-activity');
        if (!githubContainer) return;

        const username = 'thakurpaudel';

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const data = await response.json();
                githubContainer.innerHTML = `
          <p><strong>${data.public_repos}</strong> Public Repos</p>
          <p><strong>${data.followers}</strong> Followers</p>
          <a href="${data.html_url}" target="_blank" style="color: var(--primary-color);">View Profile</a>
        `;
            } else {
                githubContainer.innerHTML = `
          <p>GitHub Profile</p>
          <a href="https://github.com/${username}" target="_blank" style="color: var(--primary-color);">View Profile</a>
        `;
            }
        } catch (error) {
            githubContainer.innerHTML = `
        <p>GitHub Profile</p>
        <a href="https://github.com/${username}" target="_blank" style="color: var(--primary-color);">View Profile</a>
      `;
        }
    }

    fetchGitHubActivity();

    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .blog-card');

        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };

    const cards = document.querySelectorAll('.project-card, .blog-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Request Code Modal Logic
    const modal = document.getElementById('requestModal');
    const closeBtn = document.querySelector('.close-modal');
    const requestBtns = document.querySelectorAll('.request-code-btn');
    const modalSubject = document.getElementById('modalSubject');
    const modalForm = document.getElementById('requestCodeForm');
    const modalSuccess = document.getElementById('modalSuccess');

    if (modal) {
        // Open Modal
        requestBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const project = btn.getAttribute('data-project');
                if (project) {
                    // Reset form state first
                    modalForm.reset();
                    modalForm.style.display = 'block';
                    modalSuccess.style.display = 'none';

                    // Set subject after reset
                    modalSubject.value = `Code Request: ${project}`;
                    modal.style.display = "flex";
                }
            });
        });

        // Close Modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });

        // Cancel Button
        const cancelBtn = document.querySelector('.cancel-btn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                modal.style.display = "none";
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });

        // Handle Modal Form Submission
        modalForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = modalForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(modalForm.action, {
                    method: "POST",
                    body: new FormData(modalForm),
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    modalForm.style.display = 'none';
                    modalSuccess.style.display = 'block';
                } else {
                    alert("Oops! Something went wrong. Please try again.");
                }
            } catch (error) {
                alert("Network error. Please check your connection.");
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
