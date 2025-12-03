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
        title: "Software Developer at PTC",
        description: "Building agentic AI frameworks and AI-powered chatbots at PTC, Pune."
    },
    {
        year: "2025",
        title: "Graduated with B.Tech",
        description: "Completed AI & Data Science degree from VIT Pune with 9.08 CGPA."
    },
    {
        year: "2024",
        title: "Research Intern at PTC",
        description: "Built a vector search engine with PostgreSQL, won a team hackathon, and migrated the frontend from AngularJS to Angular 18—which was quite the adventure."
    },
    {
        year: "2022-2024",
        title: "The Classic College Overcommitment Phase",
        description: "Juggled multiple hats—counting money as Finance Head, breaking code as Cyber-security Co-Head at Team Quark, wrangling databases at EDC, and building Flutter apps at GDSC. Sleep was optional."
    },
    {
        year: "2022",
        title: "Started College at VIT Pune",
        description: "Began AI & Data Science journey at Vishwakarma Institute of Technology."
    },
    {
        year: "2021",
        title: "Founded Realumini Foundation",
        description: "Started a local community initiative with friends focused on giving back—organized leadership camps, visited orphanages, and ran tree plantation drives in rural areas."
    },
    {
        year: "2021",
        title: "Completed Higher Secondary",
        description: "Graduated from RCF School, Alibag with 93.14%."
    }
];

// ========================================
// Work Experience Data
// ========================================
const workData = [
    {
        title: "Software Developer",
        company: "PTC, Pune",
        period: "July 2025 - September 2026",
        description: "Designed and developed an agentic AI framework. Built a chatbot leveraging AI/NLP techniques. Loaded and indexed large datasets into Azure AI Search. Contributed to scalable backend system development."
    },
    {
        title: "Research Intern",
        company: "PTC, Pune",
        period: "July 2024 - July 2025",
        description: "Developed high-performance vector search engine using PostgreSQL with pgvector. Researched and implemented AI/ML proof-of-concepts. Won team hackathon. Migrated frontend from AngularJS to Angular 18."
    }
];

// ========================================
// Projects Data
// ========================================
const projectsData = [
    {
        title: "LLMs Playing Secret Hitler",
        description: "A multi-agent simulation where Large Language Models play the social deduction game 'Secret Hitler'. Features autonomous agents with Chain-of-Thought reasoning, private memory streams, and emergent deceptive behaviors.",
        tags: ["Multi-Agent Systems", "LLM", "Python", "Game Theory"],
        github: "https://github.com/Atharva-Thakur/LLMs-Playing-Secret-Hitler",
        demo:null,
        image: "assets/images/llms-secret-hitler.png"
    },
    {
        title: "Algorithmic Fairness in Loan Approval",
        description: "Analyzing bias and fairness in machine learning models for loan approval decisions. Implements fairness metrics and mitigation techniques to ensure equitable outcomes across demographic groups.",
        tags: ["Fairness", "Ethics in AI", "Python", "ML"],
        github: "https://www.kaggle.com/code/artagg/bias-in-loan-approval-algorithm-oops",
        demo: null,
        image: "assets/images/fairness-loan-approval.png"
    },
    {
        title: "Insights - AI Data Analysis Tool",
        description: "AI-powered data analysis tool using Generative AI and LLMs for automated exploration, visualization, and ML model building. Deployed on Hugging Face.",
        tags: ["Generative AI", "LLM", "Python", "Hugging Face"],
        github: "https://github.com/Atharva-Thakur/Insights",
        demo: null
    },
    {
        title: "EMOQ - Emotion-Based Food Recommendations",
        description: "Food recommendation system using facial expression analysis and computer vision to detect emotions and suggest suitable food options.",
        tags: ["Computer Vision", "ML", "Python"],
        github: "https://github.com/Atharva-Thakur/Mood-Based-Food-Recommendation-System",
        demo: null
    },
    {
        title: "SharkScore - Pitch Success Predictor",
        description: "Logistic regression model to predict success of pitches on Shark Tank India, providing actionable insights for entrepreneurs.",
        tags: ["Machine Learning", "Python", "Data Analysis"],
        github: "https://github.com/Atharva-Thakur/SharkScore-Predicting-Success-in-Shark-Tank-India-Pitches",
        demo: null,
        image: "assets/images/sharkscore.png"
    },
    {
        title: "Explainable AI for Sepsis Detection",
        description: "AI model for early sepsis detection integrating ML with clinical knowledge, providing accurate predictions with transparent, explainable outputs.",
        tags: ["XAI", "Healthcare AI", "Deep Learning"],
        github: "https://github.com/Atharva-Thakur",
        demo: null,
        image: "assets/images/explainable-ai-sepsis.png"
    },
    {
        title: "InterviewPal - AI Interview Coach",
        description: "Generative AI-powered interview simulation tool that evaluates responses using LLMs and provides personalized feedback.",
        tags: ["Generative AI", "LLM", "NLP"],
        github: "https://github.com/Atharva-Thakur/InterviewPal",
        demo: null
    }
];

// ========================================
// Blog Posts Data
// ========================================
const blogData = [
    {
        title: "Building Vector Search Engines: Lessons from Production",
        date: "November 2024",
        excerpt: "Deep dive into building high-performance vector search with PostgreSQL and pgvector—from indexing strategies to query optimization.",
        link: "blog/post.html?post=vector-search-production"
    },
    {
        title: "Making AI Explainable: Why Black Boxes Are a Problem",
        date: "October 2024",
        excerpt: "Exploring explainable AI in healthcare—how we built transparent sepsis detection models that doctors can actually trust.",
        link: "blog/post.html?post=explainable-ai-healthcare"
    },
    {
        title: "Building Emotion-Aware Systems: From Faces to Food",
        date: "September 2024",
        excerpt: "How computer vision and emotion detection can create personalized experiences—lessons from building EMOQ, a mood-based food recommendation system.",
        link: "blog/post.html?post=emotion-aware-systems"
    }
];

// ========================================
// Publications Data
// ========================================
const publicationsData = [
    {
        title: "Explainable AI For Early Detection Of Sepsis",
        authors: "Atharva Thakur et al.",
        venue: "arXiv (preprint)",
        year: "2025",
        link: "https://arxiv.org"
    },
    {
        title: "Developing A Fair Hiring Algorithm Using LLMs",
        authors: "Atharva Thakur et al.",
        venue: "IJRASEM, Vol. 7, Issue 11",
        year: "2023",
        link: "#"
    },
    {
        title: "EMOQ-Emotion Based Food Recommendations System",
        authors: "Atharva Thakur et al.",
        venue: "NeuroQuantology, Volume 20 No 13",
        year: "2022",
        link: "#"
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
