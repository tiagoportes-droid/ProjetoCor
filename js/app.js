const botao = document.getElementById("botao");
const resposta = document.getElementById("resp")

const ola = function () {
  resposta.textContent = "Olá, seja Bem-vindo(a)";
};

const soma = (n1, n2) => {
    const n1 = 10;
    const n2 = 5
    const resu = n1 + n2;
    resu = resu.toSting();
    resposta.innerHTML = resu

}
botao.addEventListener('click', soma)
