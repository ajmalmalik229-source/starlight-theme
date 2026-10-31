// Starlight Studio widgets: theme picker + twinkling sky
(function () {
  var params = new URLSearchParams(location.search);
  var theme = (params.get("theme") || "midnight").toLowerCase();
  if (["midnight", "aurora", "moonbeam"].indexOf(theme) === -1) theme = "midnight";
  document.body.setAttribute("data-theme", theme);

  var sky = document.createElement("div");
  sky.className = "sky";
  for (var n = 0; n < 46; n++) {
    var s = document.createElement("i");
    var size = Math.random() < 0.15 ? 3 : 2;
    s.style.left = (Math.random() * 100).toFixed(2) + "%";
    s.style.top = (Math.random() * 100).toFixed(2) + "%";
    s.style.width = s.style.height = size + "px";
    s.style.setProperty("--d", (3 + Math.random() * 4).toFixed(1) + "s");
    s.style.setProperty("--delay", (Math.random() * 4).toFixed(1) + "s");
    sky.appendChild(s);
  }
  document.body.insertBefore(sky, document.body.firstChild);
})();
