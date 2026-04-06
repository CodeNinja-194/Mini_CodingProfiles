
# Mini_CodingProfiles 🚀

A sleek, minimal, and interactive personal coding profile website built to showcase **problem-solving skills, developer identity, and coding platforms** — all in one place.

Designed with a clean UI, subtle animations, dark mode, and a unique floating music disc for personality.

---

## ✨ Features

- 🧠 **Daily Motivational Coding Quotes**
- 🌗 **Light / Dark Mode Toggle**
- 👤 **About Me Section**
- 🧩 **DSA & Coding Platform Profiles**
  - LeetCode
  - Codeforces
  - CodeChef
  - GeeksforGeeks
  - HackerRank
  - Coding Ninjas
  - GitHub
  - LinkedIn
- 🎵 **Background Music Disc**
  - Click to play
  - Double-click to pause
  - Vinyl-style rotating UI
- ⌨️ **Keyboard Shortcuts**
  - `T`: Toggle Dark Mode
  - `P`: Open Projects
  - `L`: Open LeetCode
  - `;`: Open LeetCode 2
  - `G`: Open GeeksforGeeks
  - `C`: Open CodeChef
  - `O`: Open Codeforces
  - `H`: Open GitHub
  - `M`: Play/Pause Music
- 🧊 **Floating Glassmorphism Navbar**
- 📱 **Fully Responsive Design**
- 📶 **PWA Support**: Installable on mobile & desktop
- 🔍 **SEO Optimized**: Meta tags, sitemap, and robots.txt
- ⚡ Smooth animations & transitions

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
  - Flexbox
  - Glassmorphism
  - Animations & Transitions
- **Vanilla JavaScript**
- **No external frameworks**

---

## 📂 Project Structure

Mini_CodingProfiles/
├── index.html # Main HTML file
├── style.css # Global styles & theme
├── script.js # Interactions, dark mode, music logic
├── manifest.json # PWA manifest
├── service-worker.js # Service worker
├── robots.txt # SEO crawl rules
├── sitemap.xml # SEO sitemap
├── CNAME # Custom domain mapping
│
├── dsaProfileImg/ # Images & icons
│ ├── photo.jpg # Profile picture
│ ├── lc.png # LeetCode icon
│ ├── cf.png # Codeforces icon
│ ├── gfg.png # GeeksforGeeks icon
│ ├── cc.png # CodeChef icon
│ ├── hr.png # HackerRank icon
│ ├── cn.png # Coding Ninjas icon
│ ├── gh.png # GitHub icon
│ └── music-cover.jpg # Music disc cover
│
├── music/ # Background music assets
│ └── Blue.mp3 # Intro / ambient music
│
├── webfiles/ # Legacy/static hosting support files
│ ├── manifest.json
│ ├── service-worker.js
│ ├── robots.txt
│ ├── sitemap.xml
│ └── CNAME
│
└── README.md # Project documentation

---

## 🚀 Deployment Notes

- Keep `manifest.json`, `service-worker.js`, `robots.txt`, `sitemap.xml`, and `CNAME` in the publish root.
- Ensure your host serves from project root for PWA + SEO files to resolve correctly.
- After deployment, verify:
  - PWA install prompt appears
  - `robots.txt` and `sitemap.xml` are publicly accessible
  - Custom domain maps to `codeninja-194.online`

---

## 🎯 Purpose

This project was built to:

- Create a **personal coding identity**
- Showcase **competitive programming profiles**
- Practice **UI/UX design with pure CSS**
- Add personality using subtle music & animations
- Serve as a **mini portfolio / profile landing page**

---

## 🧪 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Mini_CodingProfiles.git
   ```
2. Open index.html in your browser (No server or build step required)
