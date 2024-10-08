const likesCont = document.getElementById('contador-like')
const dislikesCont = document.getElementById('contador-dislike')
const status = document.getElementById('status')

let numberlikes = 0 
const numberMinimum = 10

function registrarLike() {
  numberlikes++
  likesCont.textContent = numberlikes
  
  if (numberlikes >= numberMinimum) {
    status.textContent = 'Postagem Popular'
    status.className = 'post-popular'
  } else {
    status.textContent = 'Postagem ainda não é Popular'
    status.className = 'post-not-popular'
  }
}

let numberdislikes = 0
function registrarDislike() {
  numberdislikes++
  dislikesCont.textContent = numberdislikes
}
