function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Could not load ${file}`);
      return response.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("navbar", "navbar.html");
  loadHTML("footer", "footer.html");
});
