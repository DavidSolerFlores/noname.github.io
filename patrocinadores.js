document.addEventListener("DOMContentLoaded", function() {
    fetch("patrocinadores.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("patro").innerHTML = data;
      });
  });