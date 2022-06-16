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

  document
    .querySelector("#posts")
    .setAttribute("href", "./View/maisconteudo.html");
}

if (local === "/View/contato.html") {
  let form = document.querySelector("form");
  form.setAttribute("action", "./sucesso.html");

  let textarea = document.querySelector("textarea");
  let telefone = document.createElement("input");
  telefone.setAttribute("type", "tel");
  telefone.setAttribute("class", "dados");
  telefone.setAttribute("placeholder", "telefone");
  form.insertBefore(telefone, textarea);

  textarea.setAttribute("style", "box-sizing:border-box");

  let botao = document.querySelector("#botao");
  botao.setAttribute("style", "width:100%");
}
