//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];

function atualizaListadeAmigos() {
  let nameList = document.getElementById("listaAmigos");
  nameList.innerHTML = "";
  nomeAmigos.map((name) => {
    const li = document.createElement("li");
    li.innerText = name;
    nameList.appendChild(li);
  });
}

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo");
  if (nomeAmigo.value != "") {
    nomeAmigos.push(nomeAmigo.value);
    if (nomeAmigos.length > 0) {
      atualizaListadeAmigos();
    }
    nomeAmigo.value = "";
  } else {
    alert("Por favor, insira um nome válido");
  }
}

//nameList.appendChild("li");
