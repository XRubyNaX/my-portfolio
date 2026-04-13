let highestZ = 2000;

const folder = document.getElementById('projects-folder');
const windowBox = document.getElementById('projects-window');
const closeButton = document.querySelector('#projects-window .close');
const openIntro = document.getElementById('about-me-icon')
const introWin = document.getElementById('intro-window');
const closeIntroWindow = document.querySelector('#intro-window .close');
const maxIntro = document.querySelector('#intro-window .max');
const maxProjects = document.querySelector('#projects-window .max')

folder.addEventListener('click', () => {
    highestZ++;
    windowBox.style.display = 'flex';
    windowBox.style.zIndex = highestZ;
});

closeButton.addEventListener('click', () => {
    windowBox.style.display = 'none';
});

openIntro.addEventListener('click', () => {
    highestZ++;
    introWin.style.display = 'flex';
    introWin.style.zIndex = highestZ;
});


closeIntroWindow.addEventListener('click', () => {
    introWin.style.display = 'none';
});

maxIntro.addEventListener('click', () => {
    introWin.classList.toggle('fullscreen');
});

maxProjects.addEventListener('click', () => {
    windowBox.classList.toggle('fullscreen');
});

function bringToFront(win){
    highestZ++;
    win.style.zIndex = highestZ;
}


windowBox.addEventListener('mousedown', () => bringToFront(windowBox));
introWin.addEventListener('mousedown', () => bringToFront(introWin));

function openEmail() {
  const width = 600;
  const height = 700;

  const left = (screen.width / 2) - (width / 2);
  const top = (screen.height / 2) - (height / 2);

  window.open(
    "https://mail.google.com/mail/?view=cm&to=rubinaguragain@gmail.com",
    "EmailWindow",
    `width=${width},height=${height},top=${top},left=${left},resizable=yes`
  );
}