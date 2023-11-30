
const hamburger = document.querySelector('.hamburger');
const showMenu = document.querySelector('.container');
const fadeLinks = document.querySelectorAll('.links li');

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle('open');
   showMenu.classList.toggle('show-menu');
   fadeLinks.forEach(link => {
      link.classList.toggle('fade-links');
   });
});


