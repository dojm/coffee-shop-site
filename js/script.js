const nav = document.querySelector('nav');
const toggle = document.querySelector('#toggle');
const toggleFirstLine = document.querySelector('#toggle div:first-child');
const toggleSecondLine = document.querySelector('#toggle div:nth-child(2)')
const toggleThirdLine = document.querySelector('#toggle div:last-child');

toggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  let navToggle = nav.classList.toggle('open');

  if (navToggle) {
    nav.style.width = '80vw';
    toggleFirstLine.style.transform = 'translateY(9px) rotate(-135deg)';
    toggleSecondLine.style.opacity = 0;
    toggleThirdLine.style.transform = 'translateY(-9px) rotate(135deg)'; 
  } else {
    nav.style.width = '0px';
    toggleFirstLine.style.transform = 'translateY(0px) rotate(0deg)';
    toggleSecondLine.style.opacity = 1;
    toggleThirdLine.style.transform = 'translateY(0px) rotate(0deg)'; 
  }
}
