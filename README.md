# Daniel Udensi — Developer Portfolio

A modern, fully responsive developer portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step — just clean, performant code.

**Live site:** [https://dante-914.github.io](https://dante-914.github.io)

---

## Features

- **Fully responsive** — mobile, tablet, and desktop layouts
- **Dark, pitch-black theme** with green accent
- **Typing animation** in the hero section
- **Scroll reveal animations** — elements fade in/out as you scroll
- **Parallax hero photo** for depth
- **Scroll progress bar** at the top of the page
- **Active nav link** that highlights the current section
- **Mobile hamburger menu** with smooth open/close
- **Working contact form** via Netlify Forms
- **Back to top button** that appears after scrolling
- **Accessible** — keyboard navigation, ARIA labels, reduced-motion support
- **SEO-ready** — meta tags, Open Graph, Twitter cards

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | HTML5 (semantic) |
| **Styling** | CSS3 (custom properties, grid, flexbox) |
| **Interactivity** | Vanilla JavaScript (ES6+) |
| **Forms** | Netlify Forms |
| **Deployment** | Netlify |

**No dependencies. No build tools. No framework.**

---

## Project Structure

```
portfolio/
├── index.html                   # Main HTML page
├── css/
│   └── style.css                # All styles
├── js/
│   └── main.js                  # All interactivity
├── assets/
│   ├── images/                  # Photos, project screenshots, OG image
│   └── Udensi Daniel CV.pdf     # Downloadable resume
└── README.md
```

---

##  Getting Started

### Run locally

No build step needed. Just open `index.html` in a browser, or serve it with a simple local server:

```bash
# Python 3
python -m http.server 8000

# Or Node.js
npx serve
```

Then visit `http://localhost:8000`.

### Deploy

This site is deployed via Netlify. Any push to `main` triggers a new deploy automatically.

To push an update:

```bash
git add .
git commit -m "Update site"
git push
```

---

## Contact Form

The contact form uses **Netlify Forms** — no backend code required.

**How it works:**

1. Netlify scans the HTML for `data-netlify="true"` during build.
2. On submission, the form POSTs to `/` with the form data.
3. Netlify stores the submission and (optionally) emails you.

**Required form attributes:**

```html
<form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="POST">
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="bot-field" style="display: none" />
  <!-- visible fields -->
</form>
```

**To enable email notifications:**

1. Netlify dashboard → **Site configuration** → **Notifications**
2. Add **Form submission notifications**
3. Enter your email

---

## Acknowledgements

- **Icons:** emoji (native, no dependency)
- **Image editing:** ChatGPT + remove.bg
- **Hosting:** Netlify

---

## Contact

- **Email:** [danieludensi@gmail.com](mailto:danieludensi@gmail.com)
- **LinkedIn:** [linkedin.com/in/daniel-u-udensi](https://linkedin.com/in/daniel-u-udensi)
- **GitHub:** [github.com/Dante-914](https://github.com/Dante-914)