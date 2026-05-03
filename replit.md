# Sardar RDX – Personal Portfolio Website

## Overview
A modern, dark-themed personal portfolio website for **Sardar RDX** – a Full Stack Developer, Bot Builder, and Ethical Hacker from Pakistan.

## Tech Stack
- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Server**: Node.js HTTP server (`server.js`)
- **Fonts**: Google Fonts (Orbitron, Rajdhani, Share Tech Mono)
- **Icons**: Font Awesome 6.5

## Project Structure
```
/
├── server.js          # Node.js static file server (port 5000)
├── public/
│   ├── index.html     # Main HTML with all sections
│   ├── style.css      # Full CSS styling
│   ├── script.js      # JS: particles, typing, counters, form
│   └── avatar.png     # Sardar RDX profile photo
└── attached_assets/   # Original uploaded assets
```

## Features
- Animated particle background (canvas-based)
- Glitch effect on "RDX" name
- Typing animation cycling through roles
- Circular avatar with rotating rings
- Floating skill tags around avatar
- Scroll reveal animations
- Animated stat counters
- Contact form that opens WhatsApp with pre-filled message
- Responsive (mobile hamburger menu)
- SEO meta keywords (hidden from display)
- All 6 live project links included

## Sections
1. **Hero** – Name, typed roles, avatar, social links, CTA buttons
2. **About** – 3 info cards + animated stats (10+ languages, 50+ projects, 24 age, 1000+ users)
3. **Skills** – 12 language/tech cards + 6 specialization chips
4. **Projects** – 6 live project cards with external links
5. **Contact** – Info panel + WhatsApp form + social buttons
6. **Footer** – Quick links + credits

## Deployment
- Runs on port 5000
- Deploy to Vercel: push to GitHub and import repo to Vercel (static export or Node.js)
- For Vercel: can serve `public/` as static or run `server.js` as serverless
