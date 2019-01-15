
const closeIcon = document.getElementById('close_Icon');
const hamburger = document.getElementById('hamburger');
const locasticLogo = document.getElementById('logo');
const dropDown = document.querySelector('.dropdown');
const dropDownDesktop = document.getElementById('works');
const overlay = document.querySelector('.overlay');

document.addEventListener('DOMContentLoaded', ()=> {
  dropDown.style.display = 'none';
  closeIcon.style.display = 'none';
})

hamburger.addEventListener('click', ()=> {
  hamburger.style.display = 'none';
  closeIcon.style.display = 'block';
  closeIcon.style.position = 'absolute';
  closeIcon.style.top = '24px';
  closeIcon.style.right = '24px';
  
  locasticLogo.style.display = 'none';
  dropDown.style.display = 'flex';
  dropDown.style.transition = '1s';

})

closeIcon.addEventListener('click', ()=> {
  closeIcon.style.display = 'none';
  hamburger.style.display = 'block';
  locasticLogo.style.display = 'block';
  dropDown.style.display = 'none';
})

dropDownDesktop.addEventListener('click', ()=> {
  document.getElementById("myDropdown").classList.toggle("show");
}, false)

if(window.screen.width >= 768 && window.screen.width < 1024){
  hamburger.addEventListener('click', ()=> {
    document.getElementById("overlay").classList.toggle('overlay');;
  }, false)
  closeIcon.addEventListener('click', ()=> {
    document.getElementById("overlay").classList.toggle('overlay');;
  }, false) 
}
