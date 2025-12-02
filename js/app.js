/**
 * Main Application Module
 * Handles DOM manipulation, smooth scrolling, and dynamic content loading
 */

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// Active Navigation Highlight
// ========================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--accent-color)';
            }
        });
    });
}

// ========================================
// Render Timeline Items
// ========================================
function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-content');
    
    if (!timelineContainer || !window.timelineData) return;
    
    const timelineHTML = window.timelineData.map(item => {
        const timelineImage = item.image || 'https://api.dicebear.com/7.x/shapes/svg?seed=' + encodeURIComponent(item.year + item.title);
        return `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <img src="${timelineImage}" alt="${item.title}" class="timeline-image" loading="lazy">
                <div class="timeline-text">
                    <div class="timeline-year">${item.year}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-description">${item.description}</div>
                </div>
            </div>
        </div>
    `}).join('');
    
    timelineContainer.innerHTML = timelineHTML;
}

// ========================================
// Render Work Experience
// ========================================
function renderWork() {
    const workContainer = document.getElementById('work-content');
    
    if (!workContainer || !window.workData) return;
    
    const workHTML = window.workData.map(item => `
        <div class="work-item">
            <div class="work-header">
                <div>
                    <div class="work-title">${item.title}</div>
                    <div class="work-company">${item.company}</div>
                </div>
                <div class="work-period">${item.period}</div>
            </div>
            <div class="work-description">${item.description}</div>
        </div>
    `).join('');
    
    workContainer.innerHTML = workHTML;
}

// ========================================
// Render Projects
// ========================================
function renderProjects() {
    const projectsContainer = document.getElementById('projects-content');
    
    if (!projectsContainer || !window.projectsData) return;
    
    const projectsHTML = window.projectsData.map(project => {
        const projectLink = project.github || project.demo || '#';
        const projectImage = project.image || 'https://api.dicebear.com/7.x/shapes/svg?seed=' + encodeURIComponent(project.title);
        return `
        <div class="project-card">
            <img src="${projectImage}" alt="${project.title}" class="project-image" loading="lazy">
            <a href="${projectLink}" class="project-title" target="_blank" rel="noopener">${project.title}</a>
            <div class="project-description">${project.description}</div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `}).join('');
    
    projectsContainer.innerHTML = projectsHTML;
}

// ========================================
// Render Blog Posts
// ========================================
function renderBlog() {
    const blogContainer = document.getElementById('blog-content');
    
    if (!blogContainer || !window.blogData) return;
    
    const blogHTML = window.blogData.map(post => {
        const blogImage = post.image || 'https://api.dicebear.com/7.x/shapes/svg?seed=' + encodeURIComponent(post.title);
        return `
        <div class="blog-card">
            <img src="${blogImage}" alt="${post.title}" class="blog-image" loading="lazy">
            <div class="blog-content">
                <div class="blog-header">
                    <a href="${post.link}" class="blog-title">${post.title}</a>
                    <span class="blog-separator">|</span>
                    <span class="blog-date">${post.date}</span>
                </div>
                <div class="blog-excerpt">${post.excerpt}</div>
            </div>
        </div>
    `}).join('');
    
    blogContainer.innerHTML = blogHTML;
}

// ========================================
// Render Publications
// ========================================
function renderPublications() {
    const publicationsContainer = document.getElementById('publications-content');
    
    if (!publicationsContainer || !window.publicationsData) return;
    
    const publicationsHTML = window.publicationsData.map(pub => `
        <div class="publication-item">
            <a href="${pub.link}" class="publication-title" target="_blank" rel="noopener">${pub.title}</a>
            <div class="publication-authors">${pub.authors}</div>
            <div>
                <span class="publication-venue">${pub.venue}</span> • 
                <span class="publication-year">${pub.year}</span>
            </div>
        </div>
    `).join('');
    
    publicationsContainer.innerHTML = publicationsHTML;
}

// ========================================
// Scroll to Top on Page Load
// ========================================
function scrollToTop() {
    window.scrollTo(0, 0);
}

// ========================================
// Initialize All Modules
// ========================================
function init() {
    // Load all content
    renderTimeline();
    renderWork();
    renderProjects();
    renderPublications();
    renderBlog();
    
    // Initialize features
    initSmoothScrolling();
    initActiveNavigation();
    
    // Add fade-in animation on scroll
    observeElements();
}

// ========================================
// Intersection Observer for Scroll Animations
// ========================================
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe timeline, work, project, publication, and blog items
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .work-item, .project-card, .publication-item, .blog-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// Run on DOM Content Loaded
// ========================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
