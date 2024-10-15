async function createNewNote() {
  const newNote = {
    title: 'Estudar Eventos',
    description: 'Preciso revisar os assuntos',
    userId: '465c3ca6-2e0f-4bfb-abcf-5a79457ef75e'
  }

  try {
    const response = await api.post('/notes', newNote)

    if (response.status === 201) {
      console.log('Recado cadastrado com sucesso.');
      
      // location.href = 'listagem.html'
    }
  } catch (error) {
    console.error('Erro ao cadastrar usuário', error)
  }
  
}

createNewNote()