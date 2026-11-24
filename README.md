# Tharaka Wijethunge Portfolio Site

Static academic portfolio for GitHub Pages. Plain HTML and CSS; no build step, JavaScript, external fonts, or dependencies are required.

## File structure

```text
repo/
├── index.html
├── about.html
├── experience.html
├── publications.html
├── projects.html
├── skills.html
├── contact.html
├── css/
│   └── styles.css
└── assets/
    └── me.jpeg
```

## Edit pages

- Home page: `index.html`
- About page: `about.html`
- Experience page: `experience.html`
- Publications page: `publications.html`
- Projects page: `projects.html`
- Skills page: `skills.html`
- Contact page: `contact.html`
- Shared styles: `css/styles.css`
- Navigation and footer: semantic HTML in each page

## Add/change navbar items

Update the `<nav class="nav-links">` markup in all seven HTML files. Keep `aria-current="page"` on the link for the current page. On the home page, the name links to home and carries that attribute instead.

Navigation works with JavaScript disabled. Each page also includes a keyboard-accessible skip link, visible focus styles, and a responsive layout.

## Add your photo

Put your image in:

```text
assets/me.jpeg
```

The home page loads it using:

```html
<img class="profile-photo" src="assets/me.jpeg" alt="Portrait of Tharaka Wijethunge" width="1024" height="1351" />
```

## Preview locally

From the repository directory, run:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. Stop the server with Ctrl+C.

The layout adapts at 960px and 680px. Publications are grouped by year, and home-page publication links point to stable IDs on `publications.html`. When adding a publication, preserve any existing IDs used by links.

## Publish on GitHub Pages

```bash
git add .
git commit -m "Update portfolio site"
git push
```

Then go to:

```text
GitHub repo → Settings → Pages → Branch = main → Folder = /root → Save
```
