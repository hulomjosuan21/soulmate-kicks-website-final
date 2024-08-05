const menuBtn = document.querySelector('.menu-btn');
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', (event) => {
  document.body.classList.toggle('theme-dark')
})

const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', (event) => {

  if(overlay) {
    overlay.style.display = 'block';
  }
})

document.querySelector('.close-btn').addEventListener('click', (event) => {
  if(overlay) {
    overlay.style.display = 'none';
  }
})