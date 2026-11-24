# Tharaka Wijethunge Portfolio Site

Static GitHub Pages portfolio site with separate editable HTML pages.

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
├── js/
│   ├── navbar.js
│   └── main.js
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
- Shared navbar: `js/navbar.js`

## Add/change navbar items

Edit only this file:

```text
js/navbar.js
```

Example:

```javascript
["publications.html", "Publications"]
```

## Add your photo

Put your image in:

```text
assets/me.jpeg
```

The home page loads it using:

```html
<img class="profile-photo" src="assets/me.jpeg" alt="Tharaka Wijethunge profile photo" />
```

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
