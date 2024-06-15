document.addEventListener("DOMContentLoaded", function() {
    fetch("barra.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("barraNav2").innerHTML = data;
      });
  });