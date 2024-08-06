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

document.getElementById('submit-btn').addEventListener('click', (event) => [
  event.preventDefault()
])

document.querySelector('.item-imgs').addEventListener('click', (event) => {
  this.classList.add('animate__animated animate__tada');
})