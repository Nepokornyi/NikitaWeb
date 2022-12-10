const contentImg = document.querySelectorAll('.project')
const contentVideo = document.querySelectorAll('.project-video')
const buttonsImg = document.querySelectorAll('.viewbutton');
const buttonsVideo = document.querySelectorAll('.videobutton');
const overlay = document.querySelector('.overlay');
const overlayInner = document.querySelector('.overlay__inner')
const closeOverlay = document.querySelector('.close')
const overlayImage = document.querySelector('.overlay__inner img');
const overlayVideo = document.querySelector('.overlay__inner iframe');
const body = document.getElementsByTagName("BODY")[0];

function openImg(e) {
  overlay.classList.add('open');
  const srcImg = e.currentTarget.querySelector('img').src;
  overlayImage.style.display = 'initial';
  overlayImage.src = srcImg;
  body.style.overflowY = 'hidden';
}

function openVideo(e) {
  overlay.classList.add('open');
  const srcVideo = e.currentTarget.querySelector('source').src;
  overlayVideo.style.display = 'initial';
  overlayVideo.src = srcVideo;
  body.style.overflowY = 'hidden';
}

function close() {
  overlay.classList.remove('open');
  overlayImage.src = '';
  overlayVideo.src = '';
  overlayVideo.style.display = 'none';
  overlayImage.style.display = 'none';
  body.style.overflowY = 'scroll';
}

contentImg.forEach(button => button.addEventListener('click', openImg));
contentVideo.forEach(button => button.addEventListener('click', openVideo));
closeOverlay.addEventListener('click', close);
overlay.addEventListener('click', close)


if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}


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


// const header = document.querySelector('h2')
// const caption = document.querySelector('h1')
// const menuAppear = document.querySelectorAll('.menu-point');
// const introPageAppear = document.querySelector('#about')


// setTimeout(() =>{
//   header.classList.add('appear');
//   setTimeout(() =>{
//       setTimeout(() =>{
//         menuAppear[0].style.opacity = 1;
//       },100);
//       setTimeout(() =>{
//         menuAppear[1].style.opacity = 1;
//       },200);
//       setTimeout(() =>{
//         menuAppear[2].style.opacity = 1;
//       },300);
//       setTimeout(() =>{
//         menuAppear[3].style.opacity = 1;
//       },400);
//       setTimeout(() =>{
//         menuAppear[4].style.opacity = 1;
//       },500);
//       setTimeout(() =>{
//           caption.classList.add('appear');
//       }, 600);
//       setTimeout(() =>{
//           introPageAppear.classList.add('appear');
//       },700);
//   }, 200);
// },200);



// const removeBlur = document.querySelectorAll('.blur');

// setTimeout(() =>{
//     for(let i = 0; i < removeBlur.length; i++){
//         removeBlur[i].classList.remove('blur');
//     }
// },200);

