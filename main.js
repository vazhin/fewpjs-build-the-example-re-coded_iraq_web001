// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorModal = document.querySelector('#modal')
let modalMessage = document.querySelector('#modal-message')
let likeBtns = document.querySelectorAll('.like')
let hearts = document.querySelectorAll('.like-glyph')

hideModal()

function turnHeartsFull(target) {
  for (heart of hearts){
    target.innerText = FULL_HEART;
  }
}

for (btn of likeBtns) {
  btn.addEventListener('click', (e) => {
    mimicServerCall()
      .then(() => {
        turnHeartsFull(e.target)
      })
      .catch((error) => {
        errorModal.classList.remove('hidden')
        modalMessage.innerText = error
        setTimeout(hideModal, 5000);
      })
  })
}

function hideModal() {
  errorModal.classList.add('hidden');
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
