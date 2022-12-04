const content = document.querySelectorAll('.project')
const buttons = document.querySelectorAll('.viewbutton');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

content.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);





// ------------
// reveal animation
    function reveal (){
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
  
          let windowHeight = window.innerHeight;
          let revealTop    = reveals[i].getBoundingClientRect().top;
          let revealPoint  = 0;
          
          if (revealTop < windowHeight - revealPoint) {
              reveals[i].classList.add('active');
          }
          else{
              reveals[i].classList.remove('active');
          }
      }
  }
  
  window.addEventListener('scroll', reveal);
  // ------------