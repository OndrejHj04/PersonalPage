function load() {
  document.querySelectorAll(".bar").forEach((e) => {
    let width = e.style.width.replace("%", "");
    e.style.transition = "width 5s";
    e.style.width = width * 10 + "%";
  });
}
