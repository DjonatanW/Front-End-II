// let counter = 0
// const elementCounter = document.getElementById('counter')
// const button = document.querySelector('button')
// function incrementarCounter() {
//   counter++
//   elementCounter.textContent = counter
// }
// button.onclick = incrementarCounter


// ADD event listener
// let counter = 0
// const elementCounter = document.getElementById('counter')
// const button = document.querySelector('button')

// function incrementarCounter() {
//   counter++
//   elementCounter.textContent = counter

// }

// button.addEventListener('click', incrementarCounter)


// const promessa = new Promise((resolve, reject) => {
//   const condicao = true

//   if (condicao) {
//     setTimeout(() => {
//       resolve('Estou resolvido.')
//     }, 2000)
//   } else {
//     reject('Ocorreu um erro.')
//   }

// })


// promessa
//   .then(resultado => {
//     console.log(resultado)
//     return `${resultado}. Segundo then.`
//     })
//   .then(novoResultado => console.log(novoResultado))
//   .catch(error => console.log('Error: ', error))

// async function fetchUsers() {
//   try {
//     const response = await axios.get('https://regres.in/api/users')
//     const users = response.data.data
//     console.log(users)
    
//   } catch (error) {
//     console.log(error)
//   }
//   finally {
//     console.log('Finalizou!')
//   }
// }

// fetchUsers()

function fetchUsers() {
  axios.get('https://reqres.in/api/users')
  .then(response => {
    const users = response.data.data
    console.log(users)
    
  })
  .catch (error => console.error('Erro ao buscar usuários', error))
  .finally(() => console.log('Finalizou'))
}