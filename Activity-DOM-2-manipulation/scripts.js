const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.style.backgroundColor = '#e67e22'
    card.style.textAlign = 'center' 
})

const titulos = document.querySelectorAll('.titulo-card')
titulos.forEach(titulo => {
    titulo.textContent = 'Meu Card'
    titulo.style.fontSize = '20px' 
    titulo.style.margin = '20px auto'
    titulo.style.color = '#2b385b'
})

const descricoes = document.querySelectorAll('.descricao-card')
descricoes.forEach(descricao => {
    descricao.style.color = '#f0f0f0'
    descricao.textContent = 'Descrição modificada pelo JavaScript'
    descricao.style.margin = '30px auto 30px'
    descricao.style.fontSize = '15px'
    
})

const botoesEditar = document.querySelectorAll('.botao-editar')
botoesEditar.forEach(botao => {
    botao.style.backgroundColor = '#2ecc71'
    botao.style.color = '#f0f0f0'
    botao.style.padding = '10px'
    botao.style.borderRadius = '10px'
})

const botoesApagar = document.querySelectorAll('.botao-apagar')
botoesApagar.forEach(botao => {
    botao.style.backgroundColor = '#e74c3c'
    botao.style.color = '#f0f0f0'
    botao.style.padding = '10px'
    botao.style.borderRadius = '10px'
})

botoesEditar.forEach(botao => {
  botao.setAttribute('onclick', 'editarCard()')
})

function editarCard() {
  alert('Clicou em Editar!')
}

botoesApagar.forEach(botao => {
  botao.setAttribute('onclick', 'apagarCard()')
})

function apagarCard() {
  if (confirm('Tem certeza de deletar?')) {
    alert('Confirmado!')
  } else {
    alert('Cancelou!')
  }
}
