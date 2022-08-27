// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
//document.getElementById("modal-message").hidden = true;

// Your JavaScript code goes here!

const likes = document.querySelectorAll(".like-glyph");
for (let heart of likes) {
  heart.addEventListener("click", firstFunction);
}

function firstFunction(event) {
  mimicServerCall()
  .then(likesfunction(event))
  .catch(function () {
    const nme = document.getElementById("modal");
    setTimeout(() => nme.className = " ", 3000)
  })
}

function likesfunction(event) {
  const heart = event.target
  if (heart.innerText === EMPTY_HEART) 
  {
    heart.innerText = FULL_HEART
    heart.className="activated-heart"
    window.alert("You have liked, If you want to dislike click the heart button again");
  } else {
    heart.innerText = EMPTY_HEART
    heart.className="like-glyph"
    window.alert("You have disliked");
  }
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
