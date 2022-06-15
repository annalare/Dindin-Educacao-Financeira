let local = window.location.pathname;
if (local === "/index.html") {
  document.getElementsByTagName("header")[0].style.backgroundColor = "#2E948A";
  document.getElementsByTagName("a")[1].setAttribute("href", "./cursos.html");
  document.querySelector(".personagens #pessoas").innerHTML =
    "O que falam sobre nós";

  document.querySelector("#texto1 div").style.justifyContent = "center";

  document.querySelector("#maisconteudo").innerHTML = "Mais conteúdo para você";

  let titulos = document.querySelectorAll(".titulo");
  titulos.forEach((a) => (a.style.textTransform = "uppercase"));
}
