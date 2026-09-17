const botao = document.getElementById('botao');
const resposta = document.getElementById('resp');

const soma = () => {
  const n1 = 10;
  const n2 = 5;
  let resu = n1 + n2;
  resposta.innerHTML = resu.toString();

  // O setTimeout deve ficar dentro do evento de clique
  setTimeout(() => {
    resposta.innerHTML = 'Digite a Resposta'; // Esvazia o conteúdo
  }, 3000);
};

const alterarCor = () => {
    resposta.classList.toggle("ativo")
}

botao.addEventListener('click', alterarCor);
