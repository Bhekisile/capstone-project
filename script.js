const openMenu = document.getElementById('nav-menu');

function clickX() {
  openMenu.style.display = 'none';
}

const ham = document.querySelector('.ham');
ham.addEventListener('click', () => {
  openMenu.style.display = 'block';
});

const closeBtn = document.getElementById('btn-close');
closeBtn.addEventListener('click', clickX);

