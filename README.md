# Personal Portfolio Website

A simple, minimalistic personal website built for GitHub Pages. Features a clean one-page scroll design with sections for timeline, work experience, projects, and blog posts.

## 🌟 Features

- **Single Page Design**: Smooth scrolling navigation between sections
- **Timeline**: Showcase your achievements and milestones year by year
- **Work Experience**: Display your professional journey
- **Projects**: Highlight your best work with links to demos and code
- **Blog**: Share your thoughts with static blog pages
- **Responsive**: Looks great on all devices
- **Light Theme**: Clean, minimalistic design with a light background
- **Modular Code**: Easy to customize and maintain

## 📁 Project Structure

```
.
├── index.html              # Main homepage
├── css/
│   ├── styles.css         # Main stylesheet with CSS variables
│   └── blog.css           # Blog article styles
├── js/
│   ├── app.js             # Main JavaScript functionality
│   └── data.js            # Configuration file for all content
├── blog/
│   ├── getting-started-web-development.html
│   ├── understanding-modern-javascript.html
│   └── building-scalable-applications.html
└── README.md
```

## 🚀 Getting Started

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/Atharva-Thakur/Atharva-Thakur.github.io.git
   cd Atharva-Thakur.github.io
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

### Deploy to GitHub Pages

1. Push your code to a repository named `<username>.github.io`
2. Go to repository Settings → Pages
3. Select the branch to deploy (usually `main`)
4. Your site will be live at `https://<username>.github.io`

## ✏️ Customization

### Update Your Information

All content is centralized in `js/data.js`. Edit this file to customize:

1. **Timeline Data**: Update the `timelineData` array with your achievements
2. **Work Experience**: Modify the `workData` array with your job history
3. **Projects**: Edit the `projectsData` array with your projects
4. **Blog Posts**: Update the `blogData` array with your blog entries

Example:
```javascript
const timelineData = [
    {
        year: "2025",
        title: "Your Achievement",
        description: "Description of what you accomplished."
    },
    // Add more items...
];
```

### Personalize the Homepage

Edit `index.html` to update:
- Your name in the hero section
- Navigation links
- Footer social media links
- Meta descriptions

### Customize Colors and Styles

All design variables are in `css/styles.css` at the top:

```css
:root {
    --bg-primary: #f8f9fa;
    --bg-secondary: #ffffff;
    --text-primary: #2c3e50;
    --accent-color: #3498db;
    /* ... more variables */
}
```

Change these values to match your preferred color scheme.

### Add New Blog Posts

1. Create a new HTML file in the `blog/` directory
2. Copy the structure from an existing blog post
3. Update the content
4. Add an entry to the `blogData` array in `js/data.js`

## 🎨 Design Philosophy

- **Minimalistic**: Clean and distraction-free design
- **Modular**: Separated concerns (structure, style, behavior, data)
- **Accessible**: Semantic HTML and proper ARIA labels
- **Performant**: Lightweight with no external dependencies
- **Maintainable**: Well-commented code and clear structure

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- GitHub Pages for hosting

## 📱 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📞 Contact

Update the footer social links in `index.html` with your own:
- GitHub
- LinkedIn
- Twitter
- Email

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
