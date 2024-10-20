function validarFormulario(event) {
  event.preventDefault()

  const nome = document.getElementById("nome").value
  const endereco = document.getElementById("endereco").value
  const cidade = document.getElementById("cidade").value
  const estado = document.getElementById("estado").value
  const cargo = document.querySelector('input[name="cargo"]:checked').value
  const interesses = document.querySelectorAll('input[name="interesse"]:checked')
  const miniCurriculo = document.getElementById("miniCurriculo").value

  if (!nome || !endereco || !cidade || !estado) {
      alert("Por favor, preencha todos os campos de dados pessoais.")
      return
  }

  if (interesses.length === 0) {
      alert("Por favor, selecione pelo menos uma área de interesse.")
      return
  }

  let interessesSelecionados = []
  interesses.forEach(interesse => {
      interessesSelecionados.push(interesse.value)
  })

  console.log("Dados preenchidos:")
  console.log("Nome:", nome)
  console.log("Endereço:", endereco)
  console.log("Cidade:", cidade)
  console.log("Estado:", estado)
  console.log("Natureza do Cargo:", cargo)
  console.log("Áreas de Interesse:", interessesSelecionados.join(", "))
  console.log("Mini-currículo:", miniCurriculo)
}