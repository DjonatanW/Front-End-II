document.getElementById('form-login').addEventListener('submit', ()  => {

  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  if (!username || !password) {
      alert('Por favor, preencha todos os campos.')
      return
  }

  const loginData = {
      username: username,
      password: password
  }
  autenticationUser(loginData)
})

async function autenticationUser(user) {
  try {
    const response = await api.post('/signup', user)

    if (response.status === 201) {
      alert('Login realizado com sucesso!')

      location.href = 'list-note.html'
    }
  } catch (error) {
    console.error('Erro ao realizar o login', error)
  }
}
