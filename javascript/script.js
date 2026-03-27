
// Project data
const projects = [
    {
        title: 'NeuroLink App',
        category: 'Mobile Application',
        image: '🧠',
        description: 'A revolutionary mobile app that connects neural interfaces with everyday technology, enabling seamless brain-computer interaction.',
        link: '#'
    },
    {
        title: 'CryptoTracker',
        category: 'Web Platform',
        image: '₿',
        description: 'Real-time cryptocurrency tracking platform with advanced analytics, portfolio management, and trading insights.',
        link: '#'
    },
    {
        title: 'ArtSpace',
        category: 'Creative Portfolio',
        image: '🎨',
        description: 'An immersive digital gallery showcasing contemporary art with virtual reality integration and interactive experiences.',
        link: '#'
    },
    {
        title: 'DataViz Pro',
        category: 'Analytics Dashboard',
        image: '📊',
        description: 'Professional data visualization tool that transforms complex datasets into beautiful, interactive charts and insights.',
        link: '#'
    }
];

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = (e.clientX - 20) + 'px';
        cursorFollower.style.top = (e.clientY - 20) + 'px';
    }, 100);
});

// Animate background particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
    document.getElementById('bgAnimation').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 8000);
}

setInterval(createParticle, 300);

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Project showcase
function showProject(index) {
    const project = projects[index];
    document.getElementById('projectImage').textContent = project.image;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectLink').href = project.link;

    // Update active project
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.project-item')[index].classList.add('active');
}

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

// Hover effects for interactive elements
document.querySelectorAll('a, button, .project-item, .tech-item, .nav-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.backgroundColor = 'var(--secondary)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'var(--primary)';
    });
});
