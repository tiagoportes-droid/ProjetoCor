const botao = document.getElementById("botao");
const resposta = document.getElementById("resp");

const ola = function () {
  resposta.textContent = "Olá, seja Bem-vindo(a)";
};


setTimeout(() => {
  const soma = () => {
    const n1 = 10;
    const n2 = 5;
    let resu = n1 + n2;
    resu = resu.toString();
    resposta.innerHTML = resu;
  };

  // O clique só é registrado aqui dentro
  botao.addEventListener("click", soma);
}, 1500);
