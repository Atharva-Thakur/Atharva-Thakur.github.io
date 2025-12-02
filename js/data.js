/**
 * Data Configuration Module
 * Customize this file with your personal information
 * All data is centralized here for easy maintenance
 */

// ========================================
// Timeline Data
// ========================================
const timelineData = [
    {
        year: "2025",
        title: "New Achievement",
        description: "Add your latest achievement or milestone here."
    },
    {
        year: "2024",
        title: "Another Milestone",
        description: "Describe what you accomplished during this year."
    },
    {
        year: "2023",
        title: "Important Event",
        description: "Share an important event or achievement from this year."
    },
    {
        year: "2022",
        title: "Career Beginning",
        description: "Started your journey in your field or industry."
    },
    {
        year: "2021",
        title: "Education Milestone",
        description: "Completed your degree or certification."
    }
];

// ========================================
// Work Experience Data
// ========================================
const workData = [
    {
        title: "Senior Software Engineer",
        company: "Tech Company Name",
        period: "2023 - Present",
        description: "Leading development of scalable web applications. Working with modern technologies and mentoring junior developers."
    },
    {
        title: "Software Engineer",
        company: "Another Company",
        period: "2021 - 2023",
        description: "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality products."
    },
    {
        title: "Junior Developer",
        company: "Startup Name",
        period: "2020 - 2021",
        description: "Built features for web applications and learned best practices in software development."
    }
];

// ========================================
// Projects Data
// ========================================
const projectsData = [
    {
        title: "Project Alpha",
        description: "A comprehensive web application that solves a specific problem. Built with modern technologies and best practices.",
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/yourusername/project-alpha",
        demo: "https://project-alpha.example.com",
        image: 'assets/images/dexter.png'
    },
    {
        title: "Project Beta",
        description: "An innovative tool that helps users accomplish their goals more efficiently. Features a clean and intuitive interface.",
        tags: ["Python", "Flask", "PostgreSQL"],
        github: "https://github.com/yourusername/project-beta",
        demo: null
    },
    {
        title: "Project Gamma",
        description: "Open-source library that provides useful utilities for developers. Well-documented and actively maintained.",
        tags: ["JavaScript", "TypeScript", "npm"],
        github: "https://github.com/yourusername/project-gamma",
        demo: "https://project-gamma-docs.example.com"
    },
    {
        title: "Project Delta",
        description: "Mobile-first application designed to enhance user productivity. Built with performance and accessibility in mind.",
        tags: ["React Native", "Redux", "Firebase"],
        github: "https://github.com/yourusername/project-delta",
        demo: null
    },
    {
        title: "Project Epsilon",
        description: "Data visualization dashboard that helps users make informed decisions. Interactive charts and real-time updates.",
        tags: ["Vue.js", "D3.js", "Express"],
        github: "https://github.com/yourusername/project-epsilon",
        demo: "https://project-epsilon.example.com"
    },
    {
        title: "Project Zeta",
        description: "Machine learning project that predicts outcomes based on historical data. Implements state-of-the-art algorithms.",
        tags: ["Python", "TensorFlow", "Scikit-learn"],
        github: "https://github.com/yourusername/project-zeta",
        demo: null
    }
];

// ========================================
// Blog Posts Data
// ========================================
const blogData = [
    {
        title: "Getting Started with Web Development",
        date: "November 15, 2025",
        excerpt: "A comprehensive guide for beginners who want to start their journey in web development. Learn about HTML, CSS, and JavaScript basics.",
        link: "blog/getting-started-web-development.html"
    },
    {
        title: "Understanding Modern JavaScript",
        date: "October 28, 2025",
        excerpt: "Explore the latest features in JavaScript and how they can make your code more efficient and readable. ES6+ features explained.",
        link: "blog/understanding-modern-javascript.html"
    },
    {
        title: "Building Scalable Applications",
        date: "September 10, 2025",
        excerpt: "Best practices for building applications that can handle growth. Architecture patterns, database design, and performance optimization.",
        link: "blog/building-scalable-applications.html"
    }
];

// ========================================
// Publications Data
// ========================================
const publicationsData = [
    {
        title: "Paper Title One: A Comprehensive Study",
        authors: "Your Name, Co-Author Name, Another Author",
        venue: "Conference/Journal Name 2025",
        year: "2025",
        link: "https://example.com/paper1"
    },
    {
        title: "Paper Title Two: Novel Approach to Problem Solving",
        authors: "Your Name, Collaborator Name",
        venue: "International Conference on Topic",
        year: "2024",
        link: "https://example.com/paper2"
    },
    {
        title: "Paper Title Three: Analysis and Implementation",
        authors: "Your Name, Team Member, Advisor Name",
        venue: "Journal of Research",
        year: "2024",
        link: "https://example.com/paper3"
    }
];

// ========================================
// Export Data to Global Scope
// ========================================
window.timelineData = timelineData;
window.workData = workData;
window.projectsData = projectsData;
window.publicationsData = publicationsData;
window.blogData = blogData;
