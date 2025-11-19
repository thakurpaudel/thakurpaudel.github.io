Embedded Systems Engineer Portfolio
Overview
A modern, PCB-themed portfolio website for an embedded systems engineer. The site features a unique circuit board aesthetic with green PCB traces, interactive animations, and sections for projects, blogs, and contact information.

Recent Changes (November 19, 2024)
Created initial portfolio website with PCB trace theme
Implemented responsive design with mobile navigation
Restructured from single-page to multi-page layout (separate pages for Home, Projects, Blogs, Contact)
Updated navigation to use page links instead of anchor scrolling
Integrated GitHub activity display for user thakurpaudel
Added Upwork profile links (https://www.upwork.com/freelancers/~01a985fb2bc00bb5dd?viewMode=1)
Added LinkedIn profile link (https://www.linkedin.com/in/thakurpaudel/)
Set up Python HTTP server workflow on port 5000
Updated JavaScript to work with multi-page structure
Project Structure
.
├── index.html          # Home page
├── projects.html       # Projects page
├── blogs.html          # Blogs page
├── contact.html        # Contact page
├── style.css           # PCB-themed CSS with circuit board aesthetics
├── script.js           # Interactive JavaScript for navigation and animations
├── .gitignore          # Python-specific gitignore
└── replit.md           # Project documentation

Features
Home Section

Attractive hero section with profile picture placeholder
Glitch text effect on main heading
Animated circuit frame around profile picture
Floating icons animation
Social media links (GitHub, Upwork, LinkedIn)
Projects Section

PCB trace-themed project cards
Technology tags for each project
GitHub and demo links
Hover effects with green glow
Sample projects included (IoT, robotics, power management, wireless)
Blogs Section

Blog cards with date and category badges
Sample blog posts about embedded systems topics
Responsive grid layout
Contact Section

Contact information display
GitHub activity integration (fetches real data from GitHub API)
Upwork profile link
Contact form with validation
Email and location details
Technical Details
Pure HTML, CSS, and JavaScript (no frameworks)
Multi-page structure (index.html, projects.html, blogs.html, contact.html)
Responsive design with mobile hamburger menu
Page-based navigation system
Active page highlighting in navigation
CSS animations and transitions
PCB trace theme with green (#00ff41) and blue (#0066ff) accents
Font Awesome icons for visual elements
GitHub API integration for live stats
Customization Needed
To personalize this portfolio, update the following:

Profile Picture: Replace the placeholder image URL in index.html (line with via.placeholder.com)
Personal Information:
Update name and title in the home section
Change email in contact section
Update location
GitHub Username: ✓ Set to thakurpaudel
Upwork Profile: ✓ Updated to https://www.upwork.com/freelancers/~01a985fb2bc00bb5dd?viewMode=1
LinkedIn: ✓ Updated to https://www.linkedin.com/in/thakurpaudel/
Projects: Replace sample projects with your actual projects
Blogs: Add your actual blog posts or remove section if not needed
Colors: Customize colors in :root CSS variables if desired
Workflow
Start Portfolio Website: Runs python -m http.server 5000 to serve the static site
Port 5000 is configured for webview (accessible via Replit preview)
User Preferences
Theme: PCB trace/circuit board aesthetic
Color scheme: Dark background with neon green (#00ff41) accents
Profession: Embedded systems engineer
Required sections: Home, Projects, Blogs, Contact
Integrations: GitHub activity, Upwork profile
Future Enhancements
Add actual blog content management
Implement backend for contact form
Add more project details and images
Create a CMS for easy content updates
Add animations for scroll effects