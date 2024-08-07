const menuBtn = document.querySelector('.menu-btn');
const themeBtn = document.querySelector('.theme-btn');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', (event) => {
  document.body.classList.toggle('theme-dark');

  if (themeIcon.classList.contains('bi-brightness-high')) {
    themeIcon.classList.remove('bi-brightness-high');
    themeIcon.classList.add('bi-moon');
  } else {
    localStorage.setItem('theme', 'dark-mode');
    themeIcon.classList.remove('bi-moon');
    themeIcon.classList.add('bi-brightness-high');
  }
});

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