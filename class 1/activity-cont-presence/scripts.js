const presenceCont = document.getElementById('contador')
let status = document.getElementById('status')

let numberPerson = 0 
const numberMinimum = 5
function registrarPresenca() {
  numberPerson++
  presenceCont.textContent = numberPerson

  if (numberPerson >= numberMinimum) {
    status.textContent = 'A aula pode começar'
    status.className = 'pode-comecar'
  } else {
    status.textContent = 'Aguarde por mais presença'
    statusbar.className = 'aguardando'
  }
}