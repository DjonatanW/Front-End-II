// console.log("Hello DOM");

// history.back() // volta a página anterior
// history.forward() // Avança para a próxima página
// history.go(-2) // navega para trás duas páginas

// MÉTODOS
// const fisrtStudent = document.querySelector('.aluno')
// console.log(fisrtStudent)

// const allStudents = document.querySelectorAll('.aluno')
// console.log(allStudents)

// const students = document.getElementsByClassName('aluno')
// console.log(students)

// const student1 = document.getElementById('aluno-1')
// console.log(student1)

// const itensList = document.getElementsByTagName('li')
// console.log(itensList)

// const idOfStudent = student1.getAttribute('id')
// console.log(idOfStudent);

// const button = document.getElementById('chamada')
// // const button = document.querySelector('chamada')

// const addAtributes = button.setAttribute('disabled', 'disabled')

// const elements = document.querySelectorAll('li')
// console.log(elements)

// const array = Array.from(elements)
// console.log(array);

// array.map(item => item.classList.add('escola'))

// elements.forEach(item => item.classList.add('escola'))

// const elements2 = document.querySelectorAll('li')
// const array2 = [...elements2] // spred operator

// array2.map(item => item.classList.add('escola2'))

// window.onload = () => {
//   // o código 
// }

// PROPRIEDADES
const student2 = document.getElementById('aluno-1')
student2.innerText = 'José'
console.log(student2.innerText)

student2.innerHTML = '<strong>Felipe</strong>'
student2.textContent = 'Débora'

const student3 = document.getElementById('aluno-3')
student3.classList.add('ativo', 'escola')
student3.classList.remove('ativo')
student3.classList.toggle('ativo') // se tiver ele remove e se não tiver ele add.

console.log(student3.classList.contains('ativo'))
student3.classList.replace('ativo', 'inativo')

const listPresence = document.getElementById('lista-presenca')
const newStudent = document.createElement('li')
newStudent.textContent = 'Carlos'
newStudent.classList.add('aluno')

listPresence.appendChild(newStudent)

const studentDelete = document.getElementById('aluno-2')
listPresence.removeChild(studentDelete)

console.log(listPresence.previousElementSibling)
console.log(listPresence.nextElementSibling)
console.log(listPresence.parentElement)

student2.style.backgroundColor = 'green'
student2.style.border = '1px solid red'


