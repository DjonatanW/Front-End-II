/* Desenvolva aqui a rotina */
function calcular() {
  const valorBase = parseFloat(document.getElementById('valor_base').value) || 0
  const valorTransporte = parseFloat(document.getElementById('valor_transporte').value) || 0
  const valorAlimentacao = parseFloat(document.getElementById('valor_alimentacao').value) || 0
  const receitaTotal = valorBase + valorTransporte + valorAlimentacao
  document.getElementById('valor_receita').value = receitaTotal

  // Descontos
  const valorAutomovel = parseFloat(document.getElementById('valor_automovel').value) || 0
  const faltas = parseFloat(document.getElementById('faltas').value) || 0
  const descontosTotal = valorAutomovel + faltas
  document.getElementById('valor_descontos').value = descontosTotal

  // Total
  const total = receitaTotal - descontosTotal
  document.getElementById('valor_total').value = total
}

document.getElementById('btn_calcular').addEventListener('click', calcular)

const inputs = document.querySelectorAll('input[type="number"]')
inputs.forEach(input => {
  input.addEventListener('blur', calcular)
})