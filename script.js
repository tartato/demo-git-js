console.log("Hola desde JavaScript esto es una demo");
function agregarElemento() {
  const ul = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = "Ítem nuevo";
  ul.appendChild(li);
}

function limpiarLista() {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";
}
