// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for home section
const typeEffect = () => {
    const text = "Software Engineer";
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            document.querySelector('.home-content h2').textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
};

// Initialize typing effect when page loads
window.addEventListener('load', typeEffect); 
