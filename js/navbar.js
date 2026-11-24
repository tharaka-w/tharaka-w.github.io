document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const links = [
    ["about.html", "About"],
    ["experience.html", "Experience"],
    ["publications.html", "Publications"],
    ["projects.html", "Projects"],
    ["skills.html", "Skills"],
    ["contact.html", "Contact"],
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  nav.innerHTML = `
    <nav class="nav">
      <div class="container nav-inner">
        <div class="brand">
          <a href="index.html">Tharaka <span>Wijethunge</span></a>
        </div>
        <div class="nav-links">
          ${links
            .map(([href, label]) => {
              const active = href === currentPage ? "active" : "";
              return `<a class="${active}" href="${href}">${label}</a>`;
            })
            .join("")}
        </div>
      </div>
    </nav>
  `;
});
