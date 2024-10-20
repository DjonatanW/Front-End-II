function mudarTexto() {
  const nome = prompt("Digite seu nome:");
  if (nome) {
      document.getElementById("paragrafo").innerText = `E aí ${nome}! Você está deixando o seu site dinâmico.`;
  }
}

let contador = 0;

function incrementar() {
    contador++;
    const paragrafo = document.getElementById("contador");
    paragrafo.style.display = "block";
    paragrafo.innerText = `O contador está com ${contador} clique${contador === 1 ? '' : 's'}`;
}

function zerar() {
    contador = 0;
    document.getElementById("contador").style.display = "none";
}

