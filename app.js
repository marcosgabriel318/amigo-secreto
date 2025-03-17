//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];
let nameList = document.getElementById("listaAmigos");

function gerarNumeroAleatorio() {
  const numero = parseInt(Math.random() * nomeAmigos.length);
  return numero;
}

function atualizaListadeAmigos() {
  resultado.innerHTML = "";
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

function sortearAmigo() {
  if (nomeAmigos.length > 0) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    nameList.innerHTML = "";

    const nomeSorteado = nomeAmigos[gerarNumeroAleatorio()];
    const li = document.createElement("li");

    li.innerText = `O amigo secreto sorteado é: ${nomeSorteado}`;
    resultado.appendChild(li);
  } else {
    alert("Nenhum nome para sortear! Por favor, adicione um ou mais nomes.");
  }
}
